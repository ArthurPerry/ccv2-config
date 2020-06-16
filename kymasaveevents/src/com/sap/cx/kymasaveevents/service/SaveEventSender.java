/**
 *
 */
package com.sap.cx.kymasaveevents.service;

import de.hybris.platform.apiregistryservices.dto.EventSourceData;
import de.hybris.platform.apiregistryservices.model.SaveEventConfigurationModel;
import de.hybris.platform.servicelayer.event.events.AbstractEvent;

import java.util.HashMap;
import java.util.Map;

import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.support.GenericMessage;


/**
 * @author i304002
 *
 */
public class SaveEventSender
{
	private MessageChannel channel;
	private static final String ERROR_CHANNEL = "errorChannel";

	public void sendEvent(final AbstractEvent abstractEvent, final SaveEventConfigurationModel ecm)
	{
		final EventSourceData data = new EventSourceData();
		data.setEventConfig(ecm);
		data.setEvent(abstractEvent);
		getChannel().send(createGenericMessage(data));
	}

	protected GenericMessage<EventSourceData> createGenericMessage(final EventSourceData data)
	{
		final Map<String, Object> headersMap = new HashMap<>();
		headersMap.put(MessageHeaders.REPLY_CHANNEL, ERROR_CHANNEL);
		headersMap.put(MessageHeaders.ERROR_CHANNEL, ERROR_CHANNEL);
		return new GenericMessage<>(data, headersMap);
	}

	protected MessageChannel getChannel()
	{
		return channel;
	}

	/**
	 * @param channel
	 *           the channel to set
	 */
	public void setChannel(final MessageChannel channel)
	{
		this.channel = channel;
	}
}
