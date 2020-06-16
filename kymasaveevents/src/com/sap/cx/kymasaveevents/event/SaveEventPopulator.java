/**
 *
 */
package com.sap.cx.kymasaveevents.event;

import static de.hybris.platform.kymaintegrationservices.utils.KymaEventExportUtils.DATE_FORMAT_PROP;
import static de.hybris.platform.kymaintegrationservices.utils.KymaEventExportUtils.DEFAULT_DATE_FORMAT;
import static de.hybris.platform.kymaintegrationservices.utils.KymaEventExportUtils.DEFAULT_VERSION_FORMAT;
import static de.hybris.platform.kymaintegrationservices.utils.KymaEventExportUtils.VERSION_FORMAT_PROP;

import de.hybris.platform.apiregistryservices.dto.EventSourceData;
import de.hybris.platform.apiregistryservices.populators.AbstractEventPopulator;
import de.hybris.platform.kymaintegrationservices.dto.PublishRequestData;
import de.hybris.platform.util.Config;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Required;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author i304002
 *
 */
public class SaveEventPopulator extends AbstractEventPopulator<EventSourceData, PublishRequestData>
{
	private ObjectMapper jacksonObjectMapper;

	@Override
	public void populate(final EventSourceData sourceData, final PublishRequestData publishRequestData)
	{
		final Map<String, Object> mappedEventValues = new HashMap<>();

		final SaveEvent event = (SaveEvent) sourceData.getEvent();
		for (final Entry<String, String> entry : event.getProperties().entrySet())
		{
			mappedEventValues.put(entry.getKey(), entry.getValue());
		}

		mappedEventValues.put("modifiedAttributes", event.getModifiedAttributes());

		publishRequestData.setEventId(UUID.randomUUID().toString());
		final String versionFormat = Config.getString(VERSION_FORMAT_PROP, DEFAULT_VERSION_FORMAT);
		publishRequestData.setEventTypeVersion(String.format(versionFormat, sourceData.getEventConfig().getVersion()));
		publishRequestData.setEventType(sourceData.getEventConfig().getExportName());
		publishRequestData.setDestinationTargetId(sourceData.getEventConfig().getDestinationTarget().getId());

		final Date eventDate = new Date(sourceData.getEvent().getTimestamp());
		final String dateFormat = Config.getString(DATE_FORMAT_PROP, DEFAULT_DATE_FORMAT);
		publishRequestData.setEventTime(new SimpleDateFormat(dateFormat).format(eventDate));
		publishRequestData.setData(mappedEventValues);
	}

	protected ObjectMapper getJacksonObjectMapper()
	{
		return jacksonObjectMapper;
	}

	@Required
	public void setJacksonObjectMapper(final ObjectMapper jacksonObjectMapper)
	{
		this.jacksonObjectMapper = jacksonObjectMapper;
	}
}
