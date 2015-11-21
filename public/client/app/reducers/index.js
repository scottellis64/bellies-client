import {combineReducers} from "redux";
import {routerStateReducer} from "redux-router";
import shoppingcart from "./shoppingcart";
import menudata from "./menudata";
import filters from "./filters";
import products from "./products";
import categories from "./categories";

export default combineReducers({
    shoppingcart,
    menudata,
    filters,
    products,
    categories,
    router : routerStateReducer
});
