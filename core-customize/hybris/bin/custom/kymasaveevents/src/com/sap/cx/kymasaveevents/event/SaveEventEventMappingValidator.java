/**
 *
 */
package com.sap.cx.kymasaveevents.event;

import de.hybris.platform.apiregistryservices.constraints.EventMappingValidValidator;
import de.hybris.platform.apiregistryservices.enums.EventMappingType;
import de.hybris.platform.apiregistryservices.model.SaveEventConfigurationModel;

import javax.validation.ConstraintValidatorContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author i304002
 *
 */
public class SaveEventEventMappingValidator extends EventMappingValidValidator
{
	private static final Logger LOGGER = LoggerFactory.getLogger(SaveEventEventMappingValidator.class);

	@Override
	public boolean isValid(final Object o, final ConstraintValidatorContext constraintValidatorContext)
	{
		if (o instanceof SaveEventConfigurationModel)
		{
			final SaveEventConfigurationModel eventConfiguration = (SaveEventConfigurationModel) o;
			if (!EventMappingType.BEAN.equals(eventConfiguration.getMappingType()))
			{
				LOGGER.error("EventMappingType must be BEAN for SaveEventConfiguration");
				return false;
			}
			else
			{
				return beanExistAndHasCorrectType(eventConfiguration.getConverterBean());
			}
		}
		else
		{
			return super.isValid(o, constraintValidatorContext);
		}
	}
}
