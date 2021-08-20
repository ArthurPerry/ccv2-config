/*
 * [y] hybris Platform
 *
 * Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.sap.cx.css.c4core.cxsskymaevents.setup;

import static com.sap.cx.css.c4core.cxsskymaevents.constants.CxsskymaeventsConstants.PLATFORM_LOGO_CODE;

import de.hybris.platform.core.initialization.SystemSetup;

import java.io.InputStream;

import com.sap.cx.css.c4core.cxsskymaevents.constants.CxsskymaeventsConstants;
import com.sap.cx.css.c4core.cxsskymaevents.service.CxsskymaeventsService;


@SystemSetup(extension = CxsskymaeventsConstants.EXTENSIONNAME)
public class CxsskymaeventsSystemSetup
{
	private final CxsskymaeventsService cxsskymaeventsService;

	public CxsskymaeventsSystemSetup(final CxsskymaeventsService cxsskymaeventsService)
	{
		this.cxsskymaeventsService = cxsskymaeventsService;
	}

	@SystemSetup(process = SystemSetup.Process.INIT, type = SystemSetup.Type.ESSENTIAL)
	public void createEssentialData()
	{
		cxsskymaeventsService.createLogo(PLATFORM_LOGO_CODE);
	}

	private InputStream getImageStream()
	{
		return CxsskymaeventsSystemSetup.class.getResourceAsStream("/cxsskymaevents/sap-hybris-platform.png");
	}
}
