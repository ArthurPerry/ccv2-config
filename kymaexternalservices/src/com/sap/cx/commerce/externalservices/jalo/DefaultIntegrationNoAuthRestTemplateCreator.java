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

import de.hybris.platform.apiregistryservices.model.ConsumedDestinationModel;
import de.hybris.platform.apiregistryservices.model.EndpointModel;
import de.hybris.platform.outboundservices.client.impl.AbstractRestTemplateCreator;
import de.hybris.platform.outboundservices.client.impl.UnsupportedRestTemplateException;

import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.DefaultUriTemplateHandler;
import org.springframework.web.util.UriTemplateHandler;

/**
 *
 */
public class DefaultIntegrationNoAuthRestTemplateCreator extends AbstractRestTemplateCreator
{

	@Override
	public RestOperations create(final ConsumedDestinationModel destination)
	{
		if (isApplicable(destination))
		{

			final RestTemplate restTemplate = new RestTemplate(getClientHttpRequestFactory());
			restTemplate.setUriTemplateHandler(buildUriTemplateHandler(destination.getEndpoint()));

			addMessageConverters(restTemplate);

			return restTemplate;

		}
		throw new UnsupportedRestTemplateException();
	}

	@Override
	public boolean isApplicable(final ConsumedDestinationModel destination)
	{
		return destination.getCredential() == null;
	}

	protected UriTemplateHandler buildUriTemplateHandler(final EndpointModel endpoint)
	{
		final DefaultUriTemplateHandler uriTemplateHandler = new DefaultUriTemplateHandler();
		uriTemplateHandler.setBaseUrl(endpoint.getSpecUrl());

		return uriTemplateHandler;
	}

}
