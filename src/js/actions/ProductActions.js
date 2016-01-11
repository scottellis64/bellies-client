import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    NEXT_PAGE,
    PREV_PAGE,
    SET_PAGE
} from "../constants/ActionTypes";

export function products() {
    return {
        type : GET_PRODUCTS
    };
}

export function setProducts(products) {
    return {
        type : SET_PRODUCTS,
        products
    };
}

export function nextPage() {
    return {
        type : NEXT_PAGE
    };
}

export function prevPage() {
    return {
        type : PREV_PAGE
    };
}

export function setPage(page) {
    return {
        type : SET_PAGE,
        page
    };
}

