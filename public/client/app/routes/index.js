import React        from "react";
import {
    Route,
    IndexRoute}     from "react-router";
import CoreLayout   from "../layouts/CoreLayout";
import {
    BelliesHome,
    Login,
    Banner,
    CheckoutCart,
    Product,
    FilterGrid,
    FilterList,
    RegisterAccount} from "../view/index";

export default (
    <Route path="/" component={CoreLayout}>
        <Route path="bellies" component={BelliesHome}>
            <Route path="checkout" components={{body : CheckoutCart}}/>
            <Route path="login" components={{body : Login}}/>
            <Route path="product" components={{body : Product}}/>
            <Route path="fgrid" components={{body : FilterGrid}}/>
            <Route path="flist" components={{body : FilterList}}/>
            <Route path="register" components={{body : RegisterAccount}}/>
            <Route path="banner" components={{body : Banner}}/>
        </Route>
    </Route>
);
