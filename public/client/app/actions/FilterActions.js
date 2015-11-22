import {
    GET_FILTERS,
    SET_FILTERS,
    SELECT_FILTER,
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

export function selectFilter(filterID, selected=true) {
    return {
        type : SELECT_FILTER,
        id : filterID,
        selected
    }
}

export function toggleFilter(filterID) {
    return {
        type : TOGGLE_FILTER,
        filterID,
        meta : {remote : true}
    };
}
