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
package com.sap.cx.commerce.externalservices.pricing;

import de.hybris.platform.apiregistryservices.model.ConsumedDestinationModel;
import de.hybris.platform.apiregistryservices.services.DestinationService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BCustomerService;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.order.strategies.calculation.FindPriceStrategy;
import de.hybris.platform.outboundservices.client.IntegrationRestTemplateFactory;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.PriceValue;

import java.util.Date;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.time.StopWatch;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestOperations;
import org.springframework.web.util.UriComponentsBuilder;


/**
 * Price strategy used during cart/order calculation
 */
public class ExternalFindPriceStrategy implements FindPriceStrategy
{

	private ConfigurationService configurationService;
	private SessionService sessionService;

	private FindPriceStrategy originalFindPriceStrategy;

	private IntegrationRestTemplateFactory integrationRestTemplateFactory;
	private DestinationService destinationService;

	private B2BCustomerService<B2BCustomerModel, B2BUnitModel> b2bCustomerService;
	private B2BUnitService<B2BUnitModel, B2BCustomerModel> b2bUnitService;

	private PricingHelper pricingHelper;

	private static final Logger LOG = Logger.getLogger(ExternalFindPriceStrategy.class);

	@Override
	public PriceValue findBasePrice(final AbstractOrderEntryModel entry) throws CalculationException
	{
		final StopWatch stopwatch = new StopWatch();
		stopwatch.start();
		final BaseStoreModel baseStore = entry.getOrder().getStore();
		final ConsumedDestinationModel consumedDestination = baseStore.getExternalPriceService();
		if (consumedDestination != null)
		{
			LOG.info("Calling external pricing strategy");
			final ResponseEntity<Map> price = callPriceService(entry, consumedDestination);

			LOG.info("Price = " + price.getStatusCodeValue() + " " + price.getBody() + price.getBody().get("price"));
			final PriceValue priceValue = new PriceValue(entry.getOrder().getCurrency().getIsocode(),
					Double.parseDouble(price.getBody().get("price").toString()), false);
			stopwatch.stop();
			LOG.info("External Pricing Time [" + stopwatch.getTime(TimeUnit.MILLISECONDS) + "] ms");
			return priceValue;
		}
		else
		{
			final PriceValue priceValue = originalFindPriceStrategy.findBasePrice(entry);
			stopwatch.stop();
			LOG.info("Pricing Time [" + stopwatch.getTime(TimeUnit.MILLISECONDS));
			return priceValue;
		}
	}

	protected ResponseEntity<Map> callPriceService(final AbstractOrderEntryModel entry, final ConsumedDestinationModel destination)
	{
		final RestOperations restOperations = getRestTemplate(destination);
		// TODO - better way to do this
		final UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(destination.getUrl());
		buildUriParameters(builder, entry);
		return restOperations.getForEntity(builder.build(false).toUri(), Map.class);
	}

	protected RestOperations getRestTemplate(final ConsumedDestinationModel destination)
	{
		return integrationRestTemplateFactory.create(destination);
	}

	private void buildUriParameters(final UriComponentsBuilder builder, final AbstractOrderEntryModel entry)
	{
		final AbstractOrderModel order = entry.getOrder();
		builder.queryParam("context", "calculation");
		builder.queryParam("customer", order.getUser().getUid());
		builder.queryParam("customerpricegroup", sessionService.getAttribute(CustomerModel.EUROPE1PRICEFACTORY_UPG));
		builder.queryParam("order", order.getCode());
		builder.queryParam("basesite", order.getSite().getUid());
		builder.queryParam("currency", order.getCurrency().getIsocode());
		builder.queryParam("product", entry.getProduct().getCode());
		builder.queryParam("quantity", entry.getQuantity());
		builder.queryParam("unit", entry.getUnit().getCode());
		builder.queryParam("date", new Date().getTime());
		final B2BUnitModel b2bUnit = pricingHelper.getB2BUnitOfCurrentB2BCustomer();
		if (b2bUnit != null)
		{
			builder.queryParam("b2bunit", b2bUnit.getUid());
		}
	}

	/**
	 * @param originalFindPriceStrategy
	 *           the originalFindPriceStrategy to set
	 */
	public void setOriginalFindPriceStrategy(final FindPriceStrategy originalFindPriceStrategy)
	{
		this.originalFindPriceStrategy = originalFindPriceStrategy;
	}

	/**
	 * @param configurationService
	 *           the configurationService to set
	 */
	public void setConfigurationService(final ConfigurationService configurationService)
	{
		this.configurationService = configurationService;
	}

	/**
	 * @param integrationRestTemplateFactory
	 *           the integrationRestTemplateFactory to set
	 */
	public void setIntegrationRestTemplateFactory(final IntegrationRestTemplateFactory integrationRestTemplateFactory)
	{
		this.integrationRestTemplateFactory = integrationRestTemplateFactory;
	}

	/**
	 * @param destinationService
	 *           the destinationService to set
	 */
	public void setDestinationService(final DestinationService destinationService)
	{
		this.destinationService = destinationService;
	}

	/**
	 * @param b2bCustomerService
	 *           the b2bCustomerService to set
	 */
	public void setB2bCustomerService(final B2BCustomerService b2bCustomerService)
	{
		this.b2bCustomerService = b2bCustomerService;
	}

	/**
	 * @param b2bUnitService
	 *           the b2bUnitService to set
	 */
	public void setB2bUnitService(final B2BUnitService b2bUnitService)
	{
		this.b2bUnitService = b2bUnitService;
	}

	/**
	 * @param pricingHelper
	 *           the pricingHelper to set
	 */
	public void setPricingHelper(final PricingHelper pricingHelper)
	{
		this.pricingHelper = pricingHelper;
	}

	/**
	 * @param sessionService
	 *           the sessionService to set
	 */
	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}
}
