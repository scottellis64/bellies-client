import {combineReducers} from "redux";
import {routerStateReducer} from "redux-router";
import billingInfo from "./billingInfo";
import shoppingcart from "./shoppingcart";
import menudata from "./menudata";
import products from "./products";
import checkouttabs from "./checkouttabs";
import account from "./account";

export default combineReducers({
    billingInfo,
    shoppingcart,
    menudata,
    products,
    checkouttabs,
    account,
    router : routerStateReducer
});
