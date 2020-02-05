/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.cx;

import de.hybris.platform.apiregistryservices.model.ExposedDestinationModel;
import de.hybris.platform.kymaintegrationservices.dto.ServiceRegistrationData;
import de.hybris.platform.kymaintegrationservices.populators.WebserviceSpecificationPopulator;

/**
 *
 */
public class ExtWebserviceSpecificationPopulator extends WebserviceSpecificationPopulator
{

	@Override
	public void populate(final ExposedDestinationModel source, final ServiceRegistrationData target)
	{
		super.populate(source, target);
		if (target.getApi().getCredentials().getBasic() != null)
		{
			target.getApi().setSpecificationCredentials(target.getApi().getCredentials());
		}
	}
}
