/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.cx.cxss.productrecommendation.service;

public interface ProductrecommendationService
{
	String getHybrisLogoUrl(String logoCode);

	void createLogo(String logoCode);
}
