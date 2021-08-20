/**
 *
 */
package com.sap.cx.kymasaveevents.event;

import de.hybris.platform.apiregistryservices.enums.EventMappingType;
import de.hybris.platform.apiregistryservices.model.SaveEventConfigurationModel;
import de.hybris.platform.servicelayer.interceptor.InitDefaultsInterceptor;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.PrepareInterceptor;

import org.apache.velocity.util.StringUtils;


/**
 * @author i304002
 *
 */
public class SaveEventInterceptor
		implements PrepareInterceptor<SaveEventConfigurationModel>, InitDefaultsInterceptor<SaveEventConfigurationModel>
{

	@Override
	public void onPrepare(final SaveEventConfigurationModel model, final InterceptorContext ctx) throws InterceptorException
	{
		model.setExportName(
				model.getSaveType().getCode() + "." + StringUtils.capitalizeFirstLetter(model.getSaveEvent().name().toLowerCase()));
		model.setEventClass("com.sap.cx.kymasaveevents.event.SaveEvent");
		model.setConverterBean("saveEventConverter");
	}

	@Override
	public void onInitDefaults(final SaveEventConfigurationModel model, final InterceptorContext ctx) throws InterceptorException
	{
		model.setMappingType(EventMappingType.BEAN);
		model.setEventClass("com.sap.cx.kymasaveevents.event.SaveEvent");
		model.setConverterBean("saveEventConverter");
	}

}
