import {
    GET_PRODUCTS,
    SET_PRODUCTS
} from "../constants/ActionTypes";

export function products() {
    return {
        type : GET_PRODUCTS,
        meta : {remote : true}
    };
}

export function setProducts(products) {
    return {
        type : SET_PRODUCTS,
        products
    };
}


