/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.cx.setup;

import static com.sap.cx.constants.KymafixesConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.sap.cx.constants.KymafixesConstants;
import com.sap.cx.service.KymafixesService;


@SystemSetup(extension = KymafixesConstants.EXTENSIONNAME)
public class KymafixesSystemSetup
{
	private final KymafixesService kymafixesService;

	public KymafixesSystemSetup(final KymafixesService kymafixesService)
	{
		this.kymafixesService = kymafixesService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		kymafixesService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return KymafixesSystemSetup.class.getResourceAsStream("/kymafixes/sap-hybris-platform.png");
	}
}
