/**
 *
 */
package com.sap.cx.kymasaveevents.event;

import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.servicelayer.event.events.AbstractEvent;

import java.util.Map;
import java.util.Set;

/**
 * @author i304002
 *
 */
public class SaveEvent extends AbstractEvent
{
	private String type;
	private Set<String> modifiedAttributes;
	private Map<String, String> properties;
	private SaveType saveType;
	private String changedBy;
	private Long updateTime;
	private ItemModel item;
	/**
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * @param type
	 *           the type to set
	 */
	public void setType(final String type)
	{
		this.type = type;
	}

	/**
	 * @return the modifiedAttributes
	 */
	public Set<String> getModifiedAttributes()
	{
		return modifiedAttributes;
	}

	/**
	 * @param modifiedAttributes
	 *           the modifiedAttributes to set
	 */
	public void setModifiedAttributes(final Set<String> modifiedAttributes)
	{
		this.modifiedAttributes = modifiedAttributes;
	}

	/**
	 * @return the properties
	 */
	public Map<String, String> getProperties()
	{
		return properties;
	}

	/**
	 * @param props
	 *           the properties to set
	 */
	public void setProperties(final Map<String, String> props)
	{
		this.properties = props;
	}

	/**
	 * @return the saveType
	 */
	public SaveType getSaveType()
	{
		return saveType;
	}

	/**
	 * @param saveType
	 *           the saveType to set
	 */
	public void setSaveType(final SaveType saveType)
	{
		this.saveType = saveType;
	}

	/**
	 * @return the changedBy
	 */
	public String getChangedBy()
	{
		return changedBy;
	}

	/**
	 * @param changedBy
	 *           the changedBy to set
	 */
	public void setChangedBy(final String changedBy)
	{
		this.changedBy = changedBy;
	}

	/**
	 * @return the updateTime
	 */
	public Long getUpdateTime()
	{
		return updateTime;
	}

	/**
	 * @param updateTime
	 *           the updateTime to set
	 */
	public void setUpdateTime(final Long updateTime)
	{
		this.updateTime = updateTime;
	}

	/**
	 * @return the item
	 */
	public ItemModel getItem()
	{
		return item;
	}

	/**
	 * @param item
	 *           the item to set
	 */
	public void setItem(final ItemModel item)
	{
		this.item = item;
	}


}
