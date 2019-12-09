package com.sap.cx.commerce.externalservices.pricing;

import java.io.IOException;
import java.time.Duration;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestOperations;
import org.springframework.web.util.UriComponentsBuilder;

import de.hybris.platform.apiregistryservices.model.ConsumedDestinationModel;
import de.hybris.platform.outboundservices.client.IntegrationRestTemplateFactory;
import io.github.resilience4j.retry.Retry;
import io.github.resilience4j.retry.RetryConfig;
import io.github.resilience4j.retry.RetryRegistry;

public class ExternalPriceServiceCaller implements InitializingBean {

	private IntegrationRestTemplateFactory integrationRestTemplateFactory;
	
	private Retry retry;
	
	@SuppressWarnings("rawtypes")
	public ResponseEntity<Map> findPrices(final ConsumedDestinationModel consumedDestination, final Map<String, String> searchParams)
	{
        
		final RestOperations restOperations = getRestTemplate(consumedDestination);
		
		final UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(consumedDestination.getUrl());
		builder.build(searchParams);
		
		ResponseEntity<Map> response = retry.executeSupplier(() -> restOperations.getForEntity(builder.build(false).toUri(), Map.class));
		return response;
	}
	
//	private RestTemplate getRestTemplate() {
//		RestTemplate restTemplate = new RestTemplate();
//		restTemplate.setRequestFactory(new SimpleClientHttpRequestFactory());
//        SimpleClientHttpRequestFactory rf = (SimpleClientHttpRequestFactory) restTemplate
//                .getRequestFactory();
//        rf.setReadTimeout(5000);
//        rf.setConnectTimeout(5000);
//		return restTemplate;
//	}
	
	@Override
	public void afterPropertiesSet() throws Exception {
		RetryConfig config = RetryConfig.custom()
				  .maxAttempts(3)
				  .waitDuration(Duration.ofMillis(1000))
				  //.retryOnResult(response -> response.getStatus() == 500)
				  .retryExceptions(IOException.class, TimeoutException.class).build();
		RetryRegistry registry = RetryRegistry.of(config);
		retry = registry.retry("findPrice");
	}
	
	protected RestOperations getRestTemplate(final ConsumedDestinationModel destination)
	{
		return integrationRestTemplateFactory.create(destination);
	}

	public void setIntegrationRestTemplateFactory(IntegrationRestTemplateFactory integrationRestTemplateFactory) {
		this.integrationRestTemplateFactory = integrationRestTemplateFactory;
	}
	
}
