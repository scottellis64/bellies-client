import {ADD, UPDATE, DELETE, GET_CART} from "../constants/ActionTypes";

export function addItem(id, name, qty, price) {
    return {
        key : id,
        type : ADD,
        name,
        qty,
        price
    };
}

export function deleteItem(id) {
    return {
        type : DELETE,
        key : id
    };
}

export function updateItem(id, qty) {
    return {
        key : id,
        type : UPDATE,
        qty
    };
}

export function shoppingCart() {
    return {
        type : GET_CART
    }
}
