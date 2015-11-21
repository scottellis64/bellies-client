import React from "react";
import Router, {RouteHandler, Route, DefaultRoute} from "react-router";
import {Login, Banner, CheckoutCart, Product, FilterGrid, FilterList, RegisterAccount } from "./index";

import {BANNER, CHECKOUT_CART, LOGIN, PRODUCT, FILTER_GRID, FILTER_LIST, REGISTER_ACCOUNT} from "../constants/BodyWidgets";

const routes = (
    <Route handler={BodyReactElementViewFactory}>
        <Route name="CHECKOUT_CART" path="/checkout" handler={CheckoutCart} />
        <Route name="LOGIN" path="/login" handler={Login} />
        <Route name="PRODUCT" path="/product" handler={Product} />
        <Route name="FILTER_GRID" path="/fgrid" handler={FilterGrid} />
        <Route name="FILTER_LIST" path="/flist" handler={FilterList} />
        <Route name="REGISTER_ACCOUNT" path="/register" handler={RegisterAccount} />
        <DefaultRoute name="home" handler={Banner} />
    </Route>
);

export default class BodyReactElementViewFactory {
    render() {
        return <RouteHandler/>
    }
}

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

//export function bodyReactElementViewFactory(bodyElementName) {
//    switch(bodyElementName) {
//        case LOGIN :
//            return <Login/>;
//
//        case CHECKOUT_CART :
//            return <CheckoutCart/>;
//
//        case PRODUCT :
//            return <Product/>;
//
//        case FILTER_GRID :
//            return <FilterGrid/>;
//
//        case FILTER_LIST :
//            return <FilterList/>;
//
//        case REGISTER_ACCOUNT :
//            return <RegisterAccount/>;
//
//        default :
//            return <Banner/>;
//    }
//}
