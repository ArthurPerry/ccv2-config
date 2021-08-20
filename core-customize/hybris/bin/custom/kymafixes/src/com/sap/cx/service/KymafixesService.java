/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.cx.service;

public interface KymafixesService
{
	String getHybrisLogoUrl(String logoCode);

	void createLogo(String logoCode);
}
