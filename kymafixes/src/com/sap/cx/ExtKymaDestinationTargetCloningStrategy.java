/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.cx;

import de.hybris.platform.apiregistryservices.model.AbstractDestinationModel;
import de.hybris.platform.apiregistryservices.model.BasicCredentialModel;
import de.hybris.platform.apiregistryservices.model.DestinationTargetModel;
import de.hybris.platform.apiregistryservices.model.ExposedOAuthCredentialModel;
import de.hybris.platform.kymaintegrationservices.strategies.impl.KymaDestinationTargetCloningStrategy;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;


/**
 *
 */
public class ExtKymaDestinationTargetCloningStrategy extends KymaDestinationTargetCloningStrategy
{
	@Override
	public void createDestinations(final DestinationTargetModel source, final DestinationTargetModel target,
			final List<AbstractDestinationModel> destinations)
	{
		List<AbstractDestinationModel> destinationsToBeCopied = destinations;
		final List<AbstractDestinationModel> clonedDestinations = new ArrayList<>();

		final ExposedOAuthCredentialModel credential = createCredential(target.getId());

		if (CollectionUtils.isEmpty(destinations))
		{
			destinationsToBeCopied = getDestinationService().getDestinationsByDestinationTargetId(source.getId());
		}


		for (final AbstractDestinationModel destination : destinationsToBeCopied)
		{
			final AbstractDestinationModel cloneDestination = getModelService().clone(destination);
			cloneDestination.setDestinationTarget(target);

			// don't set oauth for integration APIs
			if (destination.getCredential() == null || !(destination.getCredential() instanceof BasicCredentialModel))
			{
				cloneDestination.setCredential(credential);
			}

			clonedDestinations.add(cloneDestination);
		}

		getModelService().saveAll(clonedDestinations);
	}

}
