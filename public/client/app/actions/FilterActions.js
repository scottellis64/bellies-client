import {
    GET_FILTERS,
    SET_FILTERS,
    TOGGLE_FILTER
} from "../constants/ActionTypes";

export function filters() {
    return {
        type : GET_FILTERS,
        meta : {remote : true}
    };
}

export function setFilters(filters) {
    return {
        type : SET_FILTERS,
        filters
    };
}

export function toggleFilter(filterID) {
    return {
        type : TOGGLE_FILTER,
        filterID,
        meta : {remote : true}
    };
}
