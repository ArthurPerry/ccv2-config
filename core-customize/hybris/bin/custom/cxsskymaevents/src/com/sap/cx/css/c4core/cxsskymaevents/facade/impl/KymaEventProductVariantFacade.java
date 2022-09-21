package com.sap.cx.css.c4core.cxsskymaevents.facade.impl;

import com.sap.cx.css.c4core.cxsskymaevents.event.ProductReviewSubmittedEvent;
import de.hybris.platform.commercefacades.product.impl.DefaultProductFacade;
import de.hybris.platform.commercefacades.product.data.ReviewData;
import de.hybris.platform.commercefacades.product.impl.DefaultProductVariantFacade;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.customerreview.model.CustomerReviewModel;
import de.hybris.platform.servicelayer.event.EventService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.Assert;

public class KymaEventProductVariantFacade extends DefaultProductVariantFacade {

    public KymaEventProductVariantFacade(){
        super();
    }

    protected EventService eventService;

    public static final Logger log = LoggerFactory.getLogger(KymaEventProductVariantFacade.class);


    public EventService getEventService() {
        return eventService;
    }

    public void setEventService(EventService eventService) {
        this.eventService = eventService;
    }

    @Override
    public ReviewData postReview(final String productCode, final ReviewData reviewData) {
        Assert.notNull(reviewData, "Parameter reviewData cannot be null.");
        final ProductModel productModel = getProductService().getProductForCode(productCode);
        final UserModel userModel = getUserService().getCurrentUser();
        final CustomerReviewModel customerReviewModel = getCustomerReviewService().createCustomerReview(reviewData.getRating(),
                reviewData.getHeadline(), reviewData.getComment(), userModel, productModel);
        customerReviewModel.setLanguage(getCommonI18NService().getCurrentLanguage());
        customerReviewModel.setAlias(reviewData.getAlias());
        getModelService().save(customerReviewModel);
        ReviewData result =   getCustomerReviewConverter().convert(customerReviewModel);

        if(log.isInfoEnabled()) {
            log.info("Posting Review!@!@! Alias: {} Headline: {} ", reviewData.getAlias(), reviewData.getHeadline());
        }
        final ProductReviewSubmittedEvent prsEvent = new ProductReviewSubmittedEvent();
        prsEvent.setReviewcode(customerReviewModel.getCode());
        prsEvent.setUser(customerReviewModel.getUser().getUid());
        getEventService().publishEvent(prsEvent);
        return result;

    }
}

