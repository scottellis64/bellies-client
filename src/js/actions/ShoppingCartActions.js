import {ADD, UPDATE, DELETE} from "../constants/ActionTypes";

export function addItem(id, name, qty) {
    return {
        key : id,
        type : ADD,
        name,
        qty : qty
    };
}

export function deleteItem(id) {
    return {
        type : DELETE,
        key : id
    };
}

export function updateItem(id, name, qty) {
    return {
        key : id,
        type : UPDATE,
        qty : qty
    };
}
