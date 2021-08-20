/*
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2018 SAP SE
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * Hybris ("Confidential Information"). You shall not disclose such
 * Confidential Information and shall use it only in accordance with the
 * terms of the license agreement you entered into with SAP Hybris.
 */

package com.sap.cx.commerce.externalservices.jalo;

import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import de.hybris.platform.apiregistryservices.model.ConsumedDestinationModel;
import de.hybris.platform.outboundservices.cache.DestinationRestTemplateId;
import de.hybris.platform.outboundservices.cache.impl.DefaultDestinationRestTemplateId;
import de.hybris.platform.outboundservices.client.impl.AbstractRestTemplateCreator;
import de.hybris.platform.servicelayer.config.ConfigurationService;

/**
 *
 */
public class DefaultIntegrationNoAuthRestTemplateCreator extends AbstractRestTemplateCreator
{
	private static final String TIMEOUT = "outboundservices.httpclient.connections.connectionTimeout";
	
	private ConfigurationService configurationService;
	
	@Override
	protected RestTemplate createRestTemplate(final ConsumedDestinationModel destination)
	{
		HttpComponentsClientHttpRequestFactory factory = (HttpComponentsClientHttpRequestFactory) getClientHttpRequestFactory();
		// 1811 doesn't set the read timeout
		int timeout = configurationService.getConfiguration().getInt(TIMEOUT, 5000);
		factory.setReadTimeout(timeout);
		final RestTemplate restTemplate = new RestTemplate(factory);
		addMessageConverters(restTemplate);
		return restTemplate;
	}

	@Override
	public boolean isApplicable(final ConsumedDestinationModel destination)
	{
		return destination.getCredential() == null;
	}
	
	@Override
	protected DestinationRestTemplateId getDestinationRestTemplateId(final ConsumedDestinationModel destinationModel)
	{
		return DefaultDestinationRestTemplateId.from(destinationModel);
	}

	public void setConfigurationService(ConfigurationService configurationService) {
		this.configurationService = configurationService;
	}

}
