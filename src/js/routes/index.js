import React from "react";

import {
    Route,
    IndexRoute
} from "react-router";

import {
    BelliesHome,
    Login,
    Banner,
    CheckoutCart,
    CheckoutReviewCart,
    CheckoutBillingInfo,
    CheckoutPaymentMethod,
    Product,
    FilterGrid,
    FilterList,
    RegisterAccount,
} from "../view/index";

export default (
    <Route path="/" component={BelliesHome}>
        <Route path="checkout" components={{body : CheckoutCart}}/>
        <Route path="cartitems" components={{body : CheckoutReviewCart}}/>
        <Route path="billinginfo" components={{body : CheckoutBillingInfo}}/>
        <Route path="paymentmethod" components={{body : CheckoutPaymentMethod}}/>
        <Route path="login" components={{body : Login}}/>
        <Route path="product" components={{body : Product}}/>
        <Route path="fgrid" components={{body : FilterGrid}}/>
        <Route path="flist" components={{body : FilterList}}/>
        <Route path="register" components={{body : RegisterAccount}}/>
        <Route path="banner" components={{body : Banner}}/>
    </Route>
);
