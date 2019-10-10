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
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.jalo.order.price.PriceInformation;
import de.hybris.platform.outboundservices.client.IntegrationRestTemplateFactory;
import de.hybris.platform.product.PriceCriteria;
import de.hybris.platform.product.PriceService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.util.PriceValue;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.time.StopWatch;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestOperations;
import org.springframework.web.util.UriComponentsBuilder;




/**
 *
 */
public class ExternalPriceService implements PriceService
{
	private PriceService originalPriceService;

	private ConfigurationService configurationService;
	private IntegrationRestTemplateFactory integrationRestTemplateFactory;
	private DestinationService destinationService;
	private SessionService sessionService;
	private UserService userService;
	private I18NService i18NService;
	private BaseStoreService baseStoreService;

	private PricingHelper pricingHelper;

	private static final Logger LOG = Logger.getLogger(ExternalPriceService.class);

	@Override
	public List<PriceInformation> getPriceInformationsForProduct(final ProductModel product)
	{
		return getPriceInformations(PriceCriteria.DefaultPriceCriteria.forProduct(product));
	}

	@Override
	public List<PriceInformation> getPriceInformations(final PriceCriteria priceCriteria)
	{
		final StopWatch stopwatch = new StopWatch();
		stopwatch.start();
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		if (baseStore == null)
		{
			return originalPriceService.getPriceInformations(priceCriteria);
		}

		final ConsumedDestinationModel consumedDestination = baseStore.getExternalPriceService();
		if (consumedDestination != null)
		{
			LOG.info("Calling external pricing service");
			final ResponseEntity<Map> price = callPriceService(priceCriteria, consumedDestination);
			if (MapUtils.isEmpty(price.getBody()))
			{
				LOG.info("No price from external service, reverting to original price service");
				return originalPriceService.getPriceInformations(priceCriteria);
			}
			LOG.info("Price = " + price.getStatusCodeValue() + " " + price.getBody() + price.getBody().get("price"));
			final PriceValue priceValue = new PriceValue(i18NService.getCurrentCurrency().getIsocode(),
					Double.parseDouble(price.getBody().get("price").toString()), false);

			final PriceInformation priceInfo = new PriceInformation(Collections.EMPTY_MAP, priceValue);
			final List<PriceInformation> prices = Collections.singletonList(priceInfo);
			stopwatch.stop();
			LOG.info("External Pricing Time [" + stopwatch.getTime(TimeUnit.MILLISECONDS) + "] ms");
			return prices;
		}
		else
		{
			final List<PriceInformation> prices = originalPriceService.getPriceInformations(priceCriteria);
			stopwatch.stop();
			LOG.info("Pricing Time [" + stopwatch.getTime(TimeUnit.MILLISECONDS) + "] ms");
			return prices;
		}
	}

	protected ResponseEntity<Map> callPriceService(final PriceCriteria priceCriteria, final ConsumedDestinationModel destination)
	{
		final RestOperations restOperations = getRestTemplate(destination);
		// TODO - better way to do this
		final UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(destination.getUrl());
		buildUriParameters(builder, priceCriteria);
		return restOperations.getForEntity(builder.build(false).toUri(), Map.class);
	}

	protected RestOperations getRestTemplate(final ConsumedDestinationModel destination)
	{
		return integrationRestTemplateFactory.create(destination);
	}

	private void buildUriParameters(final UriComponentsBuilder builder, final PriceCriteria priceCriteria)
	{
		//		product, this.getPPG(ctx, product), ctx.getUser(),
		//		this.getUPG(ctx, ctx.getUser()), ctx.getCurrency(), net, date, (Collection) nul

		// channel?
		builder.queryParam("context", "default");
		builder.queryParam("customer", userService.getCurrentUser().getUid());
		builder.queryParam("customerpricegroup", sessionService.getAttribute(CustomerModel.EUROPE1PRICEFACTORY_UPG));
		// TODO basesite
		builder.queryParam("basesite", baseStoreService.getCurrentBaseStore().getUid());
		builder.queryParam("currency", i18NService.getCurrentCurrency().getIsocode());
		builder.queryParam("product", priceCriteria.getProduct().getCode());
		builder.queryParam("date", priceCriteria.getDate());
		builder.queryParam("net", priceCriteria.isNet());

		final B2BUnitModel b2bUnit = pricingHelper.getB2BUnitOfCurrentB2BCustomer();
		if (b2bUnit != null)
		{
			builder.queryParam("b2bunit", b2bUnit.getUid());
		}
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
	 * @param originalPriceService
	 *           the originalPriceService to set
	 */
	public void setOriginalPriceService(final PriceService originalPriceService)
	{
		this.originalPriceService = originalPriceService;
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
	 * @param sessionService
	 *           the sessionService to set
	 */
	public void setSessionService(final SessionService sessionService)
	{
		this.sessionService = sessionService;
	}

	/**
	 * @param userService
	 *           the userService to set
	 */
	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	/**
	 * @param i18nService
	 *           the i18NService to set
	 */
	public void setI18NService(final I18NService i18nService)
	{
		i18NService = i18nService;
	}

	/**
	 * @param baseStoreService
	 *           the baseStoreService to set
	 */
	public void setBaseStoreService(final BaseStoreService baseStoreService)
	{
		this.baseStoreService = baseStoreService;
	}

	/**
	 * @param pricingHelper
	 *           the pricingHelper to set
	 */
	public void setPricingHelper(final PricingHelper pricingHelper)
	{
		this.pricingHelper = pricingHelper;
	}


}
