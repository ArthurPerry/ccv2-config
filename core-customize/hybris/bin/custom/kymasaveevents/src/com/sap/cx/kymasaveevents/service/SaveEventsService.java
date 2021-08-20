/**
 *
 */
package com.sap.cx.kymasaveevents.service;

import de.hybris.platform.apiregistryservices.model.SaveEventConfigurationModel;
import de.hybris.platform.catalog.CatalogTypeService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.scripting.engine.ScriptExecutable;
import de.hybris.platform.scripting.engine.ScriptExecutionResult;
import de.hybris.platform.scripting.engine.ScriptingLanguagesService;
import de.hybris.platform.scripting.engine.content.impl.SimpleScriptContent;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.type.TypeService;
import de.hybris.platform.servicelayer.user.UserConstants;
import de.hybris.platform.tx.AfterSaveEvent;
import de.hybris.platform.tx.AfterSaveListener;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.hybris.backoffice.ApplicationUtils;
import com.sap.cx.kymasaveevents.event.SaveEvent;
import com.sap.cx.kymasaveevents.event.SaveType;


/**
 * @author i304002
 *
 */
public class SaveEventsService implements AfterSaveListener
{
	private static final Logger LOG = Logger.getLogger(SaveEventsService.class);

	private FlexibleSearchService flexibleSearchService;
	private SaveEventSender saveEventSender;
	private CatalogTypeService catalogTypeService;
	private ScriptingLanguagesService scriptingLanguagesService;
	private SessionService sessionService;
	private ModelService modelService;
	private TypeService typeService;
	private Map<String, SaveEventConfigurationDTO> eventConfiguration;
	private final int TYPE_CODE = 6613;

	public List<SaveEvent> collectSaveEvents(final Collection<ItemModel> models)
	{

		if (eventConfiguration == null)
		{
			loadEventConfiguration();
		}

		final List<SaveEvent> events = new LinkedList();
		final UserModel user = (UserModel) sessionService.getAttribute(UserConstants.USER_SESSION_ATTR_KEY);
		for (final Object obj : models)
		{
			final ItemModel model = (ItemModel) obj;

			final String op = model.getItemModelContext().isNew() ? "CREATE" : "UPDATE";

			final SaveEventConfigurationDTO eventConfDto = eventConfiguration.get(model.getItemtype() + "-" + op);
			if (eventConfDto != null && !isFiltered(model, eventConfDto.getFilter()))
			{
				final Set<String> dirtyAttributes = new HashSet();
				// TODO if configured type
				if (!model.getItemModelContext().getDirtyAttributes().isEmpty())
				{
					dirtyAttributes.addAll(model.getItemModelContext().getDirtyAttributes());
				}

				if (!model.getItemModelContext().getDirtyLocalizedAttributes().isEmpty())
				{
					final Collection<Set<String>> dirtyLocalizedAttributes = model.getItemModelContext().getDirtyLocalizedAttributes()
							.values();
					for (final Set<String> set : dirtyLocalizedAttributes)
					{
						dirtyAttributes.addAll(set);
					}
				}

				final Map<String, String> props = new HashMap(getUniqueAttributes(model));
				// get catalog version
				if (eventConfDto.isCatalogAwareType())
				{
					final CatalogVersionModel catVersion = modelService.getAttributeValue(model, eventConfDto.getCatalogVersionAttr());
					props.put("catalogVersion", catVersion.getVersion());
					props.put("catalog", catVersion.getCatalog().getId());
				}

				final SaveEvent event = new SaveEvent();
				event.setType(model.getItemtype());
				event.setModifiedAttributes(dirtyAttributes);
				event.setProperties(props);
				event.setSaveType(SaveType.valueOf(op));
				event.setChangedBy(user.getUid());
				event.setItem(model);
				events.add(event);
			}

		}
		return events;
	}

	public void sendDeleteEvents(final List<SaveEvent> events)
	{
		for (final SaveEvent event : events)
		{
			LOG.info("Event " + event.getType());
			final PK confPk = eventConfiguration.get(event.getType() + "-" + event.getSaveType().name()).getPk();
			saveEventSender.sendEvent(event, modelService.get(confPk));
		}
	}

	public void sendSaveEvents(final List<SaveEvent> events)
	{
		for (final SaveEvent event : events)
		{
			LOG.info("Event " + event.getType());
			final SaveEventConfigurationDTO conf = eventConfiguration.get(event.getType() + "-" + event.getSaveType().name());
			final PK confPk = conf.getPk();
			event.setUpdateTime(event.getItem().getModifiedtime().getTime());
			enrichEvent(event, conf.getEnricher());
			saveEventSender.sendEvent(event, modelService.get(confPk));
		}
	}


	@Override
	public void afterSave(final Collection<AfterSaveEvent> events)
	{
		if (shouldPerform())
		{
			for (final AfterSaveEvent event : events)
			{
				if (event.getPk().getTypeCode() == TYPE_CODE)
				{
					// reload all, only way if there is a deleted item
					loadEventConfiguration();
				}
			}
		}
	}

	public List<SaveEvent> collectDeleteEvents(final Collection<? extends Object> models)
	{
		if (eventConfiguration == null)
		{
			loadEventConfiguration();
		}

		final List<SaveEvent> events = new LinkedList();
		final UserModel user = (UserModel) sessionService.getAttribute(UserConstants.USER_SESSION_ATTR_KEY);

		for (final Object obj : models)
		{
			final ItemModel model = (ItemModel) obj;
			final SaveEvent event = new SaveEvent();
			event.setType(model.getItemtype());
			event.setSaveType(SaveType.DELETE);
			event.setChangedBy(user.getUid());
			event.setUpdateTime(System.currentTimeMillis());
		}
		return events;
	}


	/**
	 * @param model
	 */
	protected Map<String, String> getUniqueAttributes(final ItemModel model)
	{
		final Map<String, String> uniqueValues = new HashMap();
		final Set<String> uniqueAttributes = typeService.getUniqueAttributes(model.getItemtype());
		for (final String attr : uniqueAttributes)
		{
			final Object val = modelService.getAttributeValue(model, attr);
			if (val instanceof String)
			{
				uniqueValues.put(attr, val.toString());
			}
		}
		return uniqueValues;
	}

	protected boolean shouldPerform()
	{
		return ApplicationUtils.isPlatformReady();
	}

	synchronized protected void loadEventConfiguration()
	{
		final Map<String, SaveEventConfigurationDTO> eventConfTemp = new ConcurrentHashMap<String, SaveEventConfigurationDTO>();

		try
		{
			final SearchResult<SaveEventConfigurationModel> result = flexibleSearchService
					.search("SELECT {PK} FROM {" + SaveEventConfigurationModel._TYPECODE + "}");
			if (result.getCount() > 0)
			{
				for (final SaveEventConfigurationModel event : result.getResult())
				{
					if (event.isExportFlag())
					{
						final SaveEventConfigurationDTO dto = new SaveEventConfigurationDTO();
						dto.setSaveEvent(event.getSaveEvent().getCode());
						dto.setSaveType(event.getSaveType().getCode());
						dto.setFilter(event.getFilter());
						dto.setEnricher(event.getEnricher());
						dto.setPk(event.getPk());
						eventConfTemp.put(dto.getSaveType() + "-" + dto.getSaveEvent(), dto);
						if (catalogTypeService.isCatalogVersionAwareType(event.getSaveType()))
						{
							dto.setCatalogAwareType(true);
							dto.setCatalogVersionAttr(
									catalogTypeService.getCatalogVersionContainerAttribute(event.getSaveType().getCode()));
						}
						else
						{
							dto.setCatalogAwareType(false);
						}
					}
			}
			}

			eventConfiguration = eventConfTemp;
		}
		catch (final Exception e)
		{
			LOG.error("Failed to load SaveEventConfiguration", e);
		}
	}

	protected boolean isFiltered(final ItemModel item, final String filter)
	{
		if (StringUtils.isNotEmpty(filter))
		{
			final SimpleScriptContent scriptContent = new SimpleScriptContent("groovy", filter);
			final ScriptExecutable scriptExecutable = scriptingLanguagesService.getExecutableByContent(scriptContent);
			if (scriptExecutable != null)
			{
				final Map<String, Object> ctx = new HashMap();
				ctx.put("item", item);
				final ScriptExecutionResult result = scriptExecutable.execute(ctx);
				if (result.isSuccessful())
				{
					final Object obj = result.getScriptResult();
					return Boolean.TRUE.equals(obj);
				}
			}
		}
		return false;
	}

	protected void enrichEvent(final SaveEvent event, final String enricher)
	{
		if (StringUtils.isNotEmpty(enricher))
		{
			final SimpleScriptContent scriptContent = new SimpleScriptContent("groovy", enricher);
			final ScriptExecutable scriptExecutable = scriptingLanguagesService.getExecutableByContent(scriptContent);
			if (scriptExecutable != null)
			{
				final Map<String, Object> ctx = new HashMap();
				ctx.put("item", event.getItem());
				ctx.put("event", event);
				final ScriptExecutionResult result = scriptExecutable.execute(ctx);
				if (result.isSuccessful())
				{
					final Object obj = result.getScriptResult();
				}
			}
		}
	}

	/**
	 * @param flexibleSearchService
	 *           the flexibleSearchService to set
	 */
	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}

	/**
	 * @param saveEventSender
	 *           the saveEventSender to set
	 */
	public void setSaveEventSender(final SaveEventSender saveEventSender)
	{
		this.saveEventSender = saveEventSender;
	}

	/**
	 * @param catalogTypeService
	 *           the catalogTypeService to set
	 */
	public void setCatalogTypeService(final CatalogTypeService catalogTypeService)
	{
		this.catalogTypeService = catalogTypeService;
	}

	/**
	 * @return the scriptingLanguagesService
	 */
	public ScriptingLanguagesService getScriptingLanguagesService()
	{
		return scriptingLanguagesService;
	}

	/**
	 * @param scriptingLanguagesService
	 *           the scriptingLanguagesService to set
	 */
	public void setScriptingLanguagesService(final ScriptingLanguagesService scriptingLanguagesService)
	{
		this.scriptingLanguagesService = scriptingLanguagesService;
	}

	/**
	 * @param sessionService
	 *           the sessionService to set
	 */
	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	/**
	 * @param typeService
	 *           the typeService to set
	 */
	public void setTypeService(final TypeService typeService)
	{
		this.typeService = typeService;
	}

}
