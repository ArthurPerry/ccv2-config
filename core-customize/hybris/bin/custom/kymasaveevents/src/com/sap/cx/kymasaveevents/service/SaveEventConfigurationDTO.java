/**
 *
 */
package com.sap.cx.kymasaveevents.service;

import de.hybris.platform.core.PK;


/**
 * @author i304002
 *
 */
public class SaveEventConfigurationDTO
{
	private String saveType;
	private String saveEvent;
	private String filter;
	private String enricher;
	private PK pk;
	private boolean catalogAwareType = false;
	private String catalogVersionAttr;

	/**
	 * @return the saveType
	 */
	public String getSaveType()
	{
		return saveType;
	}

	/**
	 * @param saveType
	 *           the saveType to set
	 */
	public void setSaveType(final String saveType)
	{
		this.saveType = saveType;
	}

	/**
	 * @return the saveEvent
	 */
	public String getSaveEvent()
	{
		return saveEvent;
	}

	/**
	 * @param saveEvent
	 *           the saveEvent to set
	 */
	public void setSaveEvent(final String saveEvent)
	{
		this.saveEvent = saveEvent;
	}

	/**
	 * @return the filter
	 */
	public String getFilter()
	{
		return filter;
	}

	/**
	 * @param filter
	 *           the filter to set
	 */
	public void setFilter(final String filter)
	{
		this.filter = filter;
	}

	/**
	 * @return the pk
	 */
	public PK getPk()
	{
		return pk;
	}

	/**
	 * @param pk
	 *           the pk to set
	 */
	public void setPk(final PK pk)
	{
		this.pk = pk;
	}

	/**
	 * @return the catalogAwareType
	 */
	public boolean isCatalogAwareType()
	{
		return catalogAwareType;
	}

	/**
	 * @param catalogAwareType
	 *           the catalogAwareType to set
	 */
	public void setCatalogAwareType(final boolean catalogAwareType)
	{
		this.catalogAwareType = catalogAwareType;
	}

	/**
	 * @return the catalogVersionAttr
	 */
	public String getCatalogVersionAttr()
	{
		return catalogVersionAttr;
	}

	/**
	 * @param catalogVersionAttr
	 *           the catalogVersionAttr to set
	 */
	public void setCatalogVersionAttr(final String catalogVersionAttr)
	{
		this.catalogVersionAttr = catalogVersionAttr;
	}

	/**
	 * @return the enricher
	 */
	public String getEnricher()
	{
		return enricher;
	}

	/**
	 * @param enricher
	 *           the enricher to set
	 */
	public void setEnricher(final String enricher)
	{
		this.enricher = enricher;
	}


}
