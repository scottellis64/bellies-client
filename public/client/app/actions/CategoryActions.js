import {
    GET_CATEGORIES,
    SET_CATEGORIES,
    SELECT_CATEGORY
} from "../constants/ActionTypes";

export function categories() {
    return {
        type : GET_CATEGORIES,
        meta : {remote : true}
    };
}

export function setCategories(categories) {
    return {
        type : SET_CATEGORIES,
        categories
    };
}

export function selectCategory(categoryID, selected=true) {
    return {
        type : SELECT_CATEGORY,
        id : categoryID,
        selected
    }
}
