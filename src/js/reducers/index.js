import {combineReducers} from "redux";
import {routerStateReducer} from "redux-router";
import billingInfo from "./billingInfo";
import shoppingcart from "./shoppingcart";
import menudata from "./menudata";
import products from "./products";
import checkouttabs from "./checkouttabs";

export default combineReducers({
    billingInfo,
    shoppingcart,
    menudata,
    products,
    checkouttabs,
    router : routerStateReducer
});
