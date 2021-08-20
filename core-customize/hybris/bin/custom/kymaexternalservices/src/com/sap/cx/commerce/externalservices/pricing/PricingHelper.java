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

import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BCustomerService;
import de.hybris.platform.b2b.services.B2BUnitService;


/**
 *
 */
public class PricingHelper
{
	private B2BCustomerService<B2BCustomerModel, B2BUnitModel> b2bCustomerService;
	private B2BUnitService<B2BUnitModel, B2BCustomerModel> b2bUnitService;

	public B2BUnitModel getB2BUnitOfCurrentB2BCustomer()
	{
		return determineB2BUnitOfCurrentB2BCustomer();
	}

	/**
	 * TODO cache this
	 */
	protected B2BUnitModel determineB2BUnitOfCurrentB2BCustomer()
	{
		final B2BCustomerModel b2bCustomer = b2bCustomerService.getCurrentB2BCustomer();
		final B2BUnitModel parent = b2bUnitService.getParent(b2bCustomer);
		final B2BUnitModel root = b2bUnitService.getRootUnit(parent);
		return root;
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
}
