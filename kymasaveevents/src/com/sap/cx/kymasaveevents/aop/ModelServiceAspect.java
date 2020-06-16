/**
 *
 */
package com.sap.cx.kymasaveevents.aop;

import de.hybris.platform.core.Registry;
import de.hybris.platform.core.model.ItemModel;

import java.util.Collection;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import com.google.common.base.Stopwatch;
import com.sap.cx.kymasaveevents.event.SaveEvent;
import com.sap.cx.kymasaveevents.service.SaveEventsService;


/**
 * @author i304002
 *
 */
@Aspect
public class ModelServiceAspect
{
	private static final Logger LOG = Logger.getLogger(ModelServiceAspect.class);

	@Around("execution(protected void de.hybris.platform.servicelayer.internal.model.impl.DefaultModelService.saveAll(..))")
	public void interceptSaveAll(final ProceedingJoinPoint jp) throws Throwable
	{

		List<SaveEvent> events = null;
		try
		{
			final Stopwatch stopWatch = Stopwatch.createStarted();
			final Collection<ItemModel> models = (Collection<ItemModel>) jp.getArgs()[0];
			events = getSaveEventsService().collectSaveEvents(models);
			stopWatch.stop();
			LOG.info("Collected SaveEvents in " + stopWatch.elapsed(TimeUnit.MILLISECONDS) + "ms");
		}
		catch (final Exception e)
		{
			LOG.error("Failed to generate save events" + e.getMessage());
			if (LOG.isDebugEnabled())
			{
				LOG.debug(e);
			}
		}
		LOG.info("Intercepted saveAll");

		// execute the ModelService
		jp.proceed();

		if (events != null)
		{
			try
			{
				final Stopwatch stopWatch = Stopwatch.createStarted();
				// TODO asynchronously?
				getSaveEventsService().sendSaveEvents(events);
				stopWatch.stop();
				LOG.info("Sent SaveEvents in " + stopWatch.elapsed(TimeUnit.MILLISECONDS) + "ms");
			}
			catch (final Exception e)
			{
				LOG.error("Failed to send save events: " + e.getMessage());
				if (LOG.isDebugEnabled())
				{
					LOG.debug(e);
				}
			}
		}
	}

	@Around("execution(protected void de.hybris.platform.servicelayer.internal.model.impl.DefaultModelService.removeAll(..))")
	public void interceptDeleteAll(final ProceedingJoinPoint jp) throws Throwable
	{
		List<SaveEvent> events = null;
		try
		{
			final Collection<ItemModel> models = (Collection<ItemModel>) jp.getArgs()[0];
			events = getSaveEventsService().collectDeleteEvents(models);
		}
		catch (final Exception e)
		{
			LOG.error("Failed to generate delete events: " + e.getMessage());
			if (LOG.isDebugEnabled())
			{
				LOG.debug(e);
			}
		}
		LOG.info("Intercepted removeAll");

		// execute the ModelService
		jp.proceed();

		if (events != null)
		{
			try
			{
				// TODO asynchronously?
				getSaveEventsService().sendDeleteEvents(events);
			}
			catch (final Exception e)
			{
				LOG.error("Failed to send delete events" + e.getMessage());
				if (LOG.isDebugEnabled())
				{
					LOG.debug(e);
				}
			}
		}
	}

	/**
	 * @param saveEventsService
	 *           the saveEventsService to set
	 */
	public SaveEventsService getSaveEventsService()
	{
		// can't bind using spring otherwise we might get the service from the junit tenant
		return Registry.getApplicationContext().getBean("saveEventsService", SaveEventsService.class);
	}





}
