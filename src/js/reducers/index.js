import {combineReducers} from "redux";
import {routerStateReducer} from "redux-router";
import shoppingcart from "./shoppingcart";
import menudata from "./menudata";
import products from "./products";

export default combineReducers({
    shoppingcart,
    menudata,
    products,
    router : routerStateReducer
});
