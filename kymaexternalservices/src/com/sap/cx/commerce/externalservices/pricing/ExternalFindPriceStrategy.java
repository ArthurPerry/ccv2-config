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

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.time.StopWatch;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestOperations;

import de.hybris.platform.apiregistryservices.model.ConsumedDestinationModel;
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
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.PriceValue;


/**
 * Price strategy used during cart/order calculation
 */
public class ExternalFindPriceStrategy implements FindPriceStrategy
{

	private SessionService sessionService;

	private FindPriceStrategy originalFindPriceStrategy;

	private IntegrationRestTemplateFactory integrationRestTemplateFactory;
	
	private B2BCustomerService<B2BCustomerModel, B2BUnitModel> b2bCustomerService;
	private B2BUnitService<B2BUnitModel, B2BCustomerModel> b2bUnitService;

	private PricingHelper pricingHelper;
	
	private ExternalPriceServiceCaller externalPriceServiceCaller;

	
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
			@SuppressWarnings("rawtypes")
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

	@SuppressWarnings("rawtypes")
	protected ResponseEntity<Map> callPriceService(final AbstractOrderEntryModel entry, final ConsumedDestinationModel destination)
	{
		final Map<String, String> searchParams = buildUriParameters(entry);
		return externalPriceServiceCaller.findPrices(destination, searchParams);

	}

	protected RestOperations getRestTemplate(final ConsumedDestinationModel destination)
	{
		return integrationRestTemplateFactory.create(destination);
	}

	private Map<String, String> buildUriParameters(final AbstractOrderEntryModel entry)
	{
		Map<String, String> params = new HashMap<String, String>();
		final AbstractOrderModel order = entry.getOrder();
		params.put("context", "calculation");
		params.put("customer", order.getUser().getUid());
		params.put("customerpricegroup", sessionService.getAttribute(CustomerModel.EUROPE1PRICEFACTORY_UPG));
		params.put("order", order.getCode());
		params.put("basesite", order.getSite().getUid());
		params.put("currency", order.getCurrency().getIsocode());
		params.put("product", entry.getProduct().getCode());
		params.put("quantity", "" + entry.getQuantity());
		params.put("unit", entry.getUnit().getCode());
		params.put("date", "" + new Date().getTime());
		final B2BUnitModel b2bUnit = pricingHelper.getB2BUnitOfCurrentB2BCustomer();
		if (b2bUnit != null)
		{
			params.put("b2bunit", b2bUnit.getUid());
		}
		return params;
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
	 * @param integrationRestTemplateFactory
	 *           the integrationRestTemplateFactory to set
	 */
	public void setIntegrationRestTemplateFactory(final IntegrationRestTemplateFactory integrationRestTemplateFactory)
	{
		this.integrationRestTemplateFactory = integrationRestTemplateFactory;
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

	public void setExternalPriceServiceCaller(ExternalPriceServiceCaller externalPriceServiceCaller) {
		this.externalPriceServiceCaller = externalPriceServiceCaller;
	}
}
