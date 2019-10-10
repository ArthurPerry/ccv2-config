# cxsskymaevents
Custom Commerce events for Kyma


## Introduction

[Custom SAP Commerce Cloud Events for SAP Cloud Platform Extension Factory](https://www.sap.com/cxworks/article/454683222/Custom_SAP_Commerce_Cloud_Events_for_SAP_Cloud_Platform_Extension_Factory)

[Exposing Custom Commerce Events to Kyma](https://wiki.hybris.com/pages/viewpage.action?pageId=432582019)

This SAP Commerce extension allows one to expose a custom event in Commerce to Kyma. SAP Commerce events are simple Java classes without further metadata, which extend SAP Commerce AbstractEvent.  The example event included in this extension is *product.reviewsubmitted*.

v0.2 - Extension has been refactored to simplify the Event bean to just include a review 'code'.  The CustomerReview type has been extended to include a `code` attribute which is a random `UUID` value. An Integration API type `InboundCustomerReview` has been created to provide the full object details as well as the related `Product` and `User` type details.

## Installation
* Add the extension to your SAP Commerce system 
* Perform a Commerce System Update
* Import [projectdata-kymaevents.impex](resources/impex/projectdata-kymaevents.impex) into Commerce (included in the extension) - this adds `product.reviewsubmitted` to the list of exposed events from Commerce in the `Default_Template` Destination Target template
* Import [projectdata-integration-objects.impex](resources/impex/projectdata-integration-objects.impex) into Commerce (also included) - this creates the `InboundCustomerReview` IntegrationObject
* [OPTIONAL for Commerce 1905.02 or greater] Import [projectdata-register-integration-object.impex](resources/impex/projectdata-register-integration-object.impex) into Commerce (also included) - this will register the IntegrationObject as an Exposed Destination protected by Basic Authentication so it can be registered in the Kyma Service Catalog alongside the other Commerce APIs 
  (See [Register a Commerce Cloud Integration Object (OData) API](https://wiki.hybris.com/display/ps/Register+a+Commerce+Cloud+Integration+Object+%28OData%29+API))
* Add a new Application to your Kyma cluster 
* In Commerce perform the one-click configuration (Register Destination Target Action) for the "Default_Template" Destination Target

## Lambda Function
[process-review.js](resources/lambda) is a sample lambda function that receives the `product.review-submitted` event and looks up the review details using the Integration API in Commerce.  

## Create a new custom event
1. Create a bean in [cxsskymaevents-beans.xml](resources/cxsskymaevents-beans.xml) and run `ant all`.  This will generate the event bean class.
   ```xml
    <bean class="com.cxlivedemo.events.ProductReviewSubmittedEvent" type="event">
	    <property name="reviewcode" type="String"/>
    </bean>
    ```
2. Extend the relevant Facade or Service bean to invoke the *eventService* (ie. DefaultProductFacade:
    ```java
    final ProductReviewSubmittedEvent prsEvent = new ProductReviewSubmittedEvent();
    prsEvent.setReview(reviewData);
    getEventService().publishEvent(prsEvent); 
    ```
3. Build and run system update

4. Add your event configuration via [kymaevents.impex](resources/impex/projectdata-kymaevents.impex)
```impex
INSERT_UPDATE EventConfiguration;eventClass[unique=true];destinationTarget(id)[unique = true,default=$destination_target];version[unique=true,default=1];exportFlag;priority(code);exportName;mappingType(code)[default=GENERIC];converterBean;description;extensionName
                                ; com.sap.cx.css.c4core.cxsskymaevents.event.ProductReviewSubmittedEvent                                 ;;; true      ; MEDIUM    ; product.reviewsubmitted                               ;;; "Product Review Submitted 1"                         ; cxsskymaevents

INSERT_UPDATE EventPropertyConfiguration; eventConfiguration(eventClass, destinationTarget(id[default = $destination_target]), version[default = 1])[unique = true]; propertyName[unique = true]; propertyMapping         ; title            ; description     ; examples(key, value)[map-delimiter = |]; required[default = true]; type[default = 'string'];
                                        ; com.sap.cx.css.c4core.cxsskymaevents.event.ProductReviewSubmittedEvent                                                                  ; reviewcode                   ; "event.reviewcode" ; "Review Code"       ; Review Code - randomly generated v4 UUID. ;     reviewcode->2bc5b206-c8c8-4625-b9c2-f50ead2d1999                                  ;                         ;
```

## Resources
[Standard Event Collection Expansion](https://wiki.hybris.com/display/pmtelco/Standard+Event+Collection+Expansion) - Product team proposal


