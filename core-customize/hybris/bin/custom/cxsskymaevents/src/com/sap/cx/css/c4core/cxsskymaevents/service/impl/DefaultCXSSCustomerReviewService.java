package com.sap.cx.css.c4core.cxsskymaevents.service.impl;

import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.customerreview.CustomerReviewService;
import de.hybris.platform.customerreview.impl.DefaultCustomerReviewService;
import de.hybris.platform.customerreview.model.CustomerReviewModel;
import org.apache.commons.lang.StringUtils;

import java.util.Date;
import java.util.UUID;

public class DefaultCXSSCustomerReviewService extends DefaultCustomerReviewService implements CustomerReviewService {
    @Override
    public CustomerReviewModel createCustomerReview(final Double rating, final String headline, final String comment,
                                                    final UserModel user, final ProductModel product)
    {
        UUID code = UUID.randomUUID();
        return createCustomerReview(rating,headline,comment,user,product,code.toString());
    }


    public CustomerReviewModel createCustomerReview(final Double rating, final String headline, final String comment,
                                                    final UserModel user, final ProductModel product, String code)
    {
        final CustomerReviewModel review = getModelService().create(CustomerReviewModel.class);
        review.setUser(user);
        review.setProduct(product);
        review.setRating(rating);
        review.setHeadline(headline);
        review.setComment(comment);
        review.setCode(code);
        getModelService().save(review);
        return review;
    }
}
