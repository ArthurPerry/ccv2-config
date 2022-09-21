/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.cx.cxss.productrecommendation.setup;

import static com.sap.cx.cxss.productrecommendation.constants.ProductrecommendationConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.sap.cx.cxss.productrecommendation.constants.ProductrecommendationConstants;
import com.sap.cx.cxss.productrecommendation.service.ProductrecommendationService;


@SystemSetup(extension = ProductrecommendationConstants.EXTENSIONNAME)
public class ProductrecommendationSystemSetup
{
	private final ProductrecommendationService productrecommendationService;

	public ProductrecommendationSystemSetup(final ProductrecommendationService productrecommendationService)
	{
		this.productrecommendationService = productrecommendationService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		productrecommendationService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return ProductrecommendationSystemSetup.class.getResourceAsStream("/productrecommendation/sap-hybris-platform.png");
	}
}
