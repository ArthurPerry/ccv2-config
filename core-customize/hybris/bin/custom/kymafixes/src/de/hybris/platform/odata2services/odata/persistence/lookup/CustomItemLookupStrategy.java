/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.platform.odata2services.odata.persistence.lookup;

import de.hybris.platform.integrationservices.search.FlexibleSearchQueryBuilder;
import de.hybris.platform.integrationservices.search.ItemTypeMatch;
import de.hybris.platform.odata2services.odata.persistence.ItemLookupRequest;

import org.apache.olingo.odata2.api.edm.EdmException;


/**
 *
 */
public class CustomItemLookupStrategy extends DefaultItemLookupStrategy
{
	/**
	 * Fix for https://jira.hybris.com/browse/IAPI-1606
	 */
	@Override
	protected FlexibleSearchQueryBuilder queryBuilder(final ItemLookupRequest lookupRequest) throws EdmException
	{
		final FlexibleSearchQueryBuilder builder = super.queryBuilder(lookupRequest);
		builder.withTypeHierarchyRestriction(ItemTypeMatch.ALL_SUBTYPES);
		return builder;
	}
}
