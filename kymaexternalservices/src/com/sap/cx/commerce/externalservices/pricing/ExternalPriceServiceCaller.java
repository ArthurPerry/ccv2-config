package com.sap.cx.commerce.externalservices.pricing;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.URI;
import java.time.Duration;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import de.hybris.platform.apiregistryservices.model.ConsumedDestinationModel;
import de.hybris.platform.outboundservices.client.IntegrationRestTemplateFactory;
import io.github.resilience4j.retry.Retry;
import io.github.resilience4j.retry.RetryConfig;
import io.github.resilience4j.retry.RetryRegistry;
import io.vavr.CheckedFunction0;
import io.vavr.control.Try;

public class ExternalPriceServiceCaller implements InitializingBean {

	private IntegrationRestTemplateFactory integrationRestTemplateFactory;
	
	private Retry retry;
	
	private static final Logger LOG = Logger.getLogger(ExternalPriceServiceCaller.class);

	@SuppressWarnings("rawtypes")
	public ResponseEntity<Map> findPrices(final ConsumedDestinationModel consumedDestination, final Map<String, String> searchParams)
	{
        
		final RestTemplate restOperations = getRestTemplate(consumedDestination);
		
		final UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(consumedDestination.getUrl());
		builder.build(searchParams);
		
		CheckedFunction0<ResponseEntity<Map>> retryableSupplier = Retry
				.decorateCheckedSupplier(retry, () -> {
						//HttpComponentsClientHttpRequestFactory factory = (HttpComponentsClientHttpRequestFactory)restOperations.getRequestFactory();
						//LOG.info("Connections " + factory.getHttpClient().getConnectionManager().toString());
						URI uri = builder.build(false).toUri();
						LOG.info("Calling price service: " + uri.toString());
						return restOperations.getForEntity(uri, Map.class);
					});
		Try<ResponseEntity<Map>> result = Try.of(retryableSupplier);
		if (result.isFailure())
		{
			LOG.error("Failed pricing call", result.getCause());
		}
		return result.get();
	}
	
	
	@Override
	public void afterPropertiesSet() throws Exception {
		RetryConfig config = RetryConfig.custom().maxAttempts(5).waitDuration(Duration.ofMillis(1000))
				  .retryExceptions(ResourceAccessException.class, SocketTimeoutException.class, IOException.class, TimeoutException.class).build();
		RetryRegistry registry = RetryRegistry.of(config);
		retry = registry.retry("findPrice");

	}
	
	protected RestTemplate getRestTemplate(final ConsumedDestinationModel destination)
	{
		return (RestTemplate)integrationRestTemplateFactory.create(destination);
	}

	public void setIntegrationRestTemplateFactory(IntegrationRestTemplateFactory integrationRestTemplateFactory) {
		this.integrationRestTemplateFactory = integrationRestTemplateFactory;
	}
	
}
