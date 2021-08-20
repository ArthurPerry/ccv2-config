/**
 *
 */
package com.sap.cx.kymasaveevents.event;

import de.hybris.platform.apiregistryservices.model.SaveEventAttributeModel;
import de.hybris.platform.apiregistryservices.model.SaveEventConfigurationModel;
import de.hybris.platform.apiregistryservices.model.events.EventConfigurationModel;
import de.hybris.platform.catalog.CatalogTypeService;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.type.AttributeDescriptorModel;
import de.hybris.platform.kymaintegrationservices.dto.PayloadData;
import de.hybris.platform.kymaintegrationservices.dto.PropertyData;
import de.hybris.platform.kymaintegrationservices.dto.SubscribeData;
import de.hybris.platform.kymaintegrationservices.dto.TopicData;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.type.TypeService;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.collections.CollectionUtils;


/**
 * @author i304002
 *
 */
public class SaveEventTopicPopulator implements Populator<EventConfigurationModel, TopicData>
{

	private TypeService typeService;
	private CatalogTypeService catalogTypeService;

	@Override
	public void populate(final EventConfigurationModel source, final TopicData target) throws ConversionException
	{
		if (source instanceof SaveEventConfigurationModel)
		{
			final SaveEventConfigurationModel saveEventSource = (SaveEventConfigurationModel) source;

			final PayloadData payload = new PayloadData();
			payload.setType("object");

			final List<String> required = new LinkedList<>();



			final Map<String, PropertyData> properties = new HashMap<>();

			final Set<String> uniqueProperties = typeService.getUniqueAttributes(saveEventSource.getSaveType().getCode());

			for (final String uniqueProp : uniqueProperties)
			{
				final AttributeDescriptorModel attr = typeService.getAttributeDescriptor(saveEventSource.getSaveType(), uniqueProp);
				properties.put(uniqueProp, createProperty("string", attr.getName(), attr.getDescription()));
				required.add(uniqueProp);
			}

			if (catalogTypeService.isCatalogVersionAwareType(saveEventSource.getSaveType()))
			{
				properties.put("catalogVersion", createProperty("string", "Catalog Version", "Catalog Version"));
				required.add("catalogVersion");

				properties.put("catalog", createProperty("string", "Catalog", "Catalog"));
				required.add("catalog");

			}

			if (CollectionUtils.isNotEmpty(saveEventSource.getSaveEventAttributes()))
			{
				for (final SaveEventAttributeModel attr : saveEventSource.getSaveEventAttributes())
				{
					properties.put(attr.getQualifier(), createProperty("string", attr.getTitle(), attr.getDescription()));
					required.add(attr.getQualifier());
				}
			}

			final PropertyData modifiedAttributesProp = new PropertyData();
			modifiedAttributesProp.setType("array");
			modifiedAttributesProp.setDescription("List of attribute names for attributes with changed values");
			modifiedAttributesProp.setTitle("Modified Attributes");

			properties.put("modifiedAttributes", modifiedAttributesProp);


			if (CollectionUtils.isNotEmpty(required))
			{
				payload.setRequired(required);
			}
			payload.setProperties(properties);

			final SubscribeData subscribe = new SubscribeData();
			subscribe.setSummary(source.getDescription());
			subscribe.setPayload(payload);

			target.setSubscribe(subscribe);
		}
	}

	protected PropertyData createProperty(final String type, final String title, final String description)
	{
		final PropertyData prop = new PropertyData();
		prop.setType(type);
		prop.setDescription(description);
		prop.setTitle(title);
		return prop;
	}
	/**
	 * @param typeService
	 *           the typeService to set
	 */
	public void setTypeService(final TypeService typeService)
	{
		this.typeService = typeService;
	}

	/**
	 * @param catalogTypeService
	 *           the catalogTypeService to set
	 */
	public void setCatalogTypeService(final CatalogTypeService catalogTypeService)
	{
		this.catalogTypeService = catalogTypeService;
	}

}
