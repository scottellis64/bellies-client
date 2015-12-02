import {
    GET_FILTERS,
    SET_FILTERS,
    SELECT_FILTER,
    FILTERS_SELECTED
} from "../constants/ActionTypes";

export function filters() {
    return {
        type : GET_FILTERS
    };
}

export function setFilters(filters) {
    return {
        type : SET_FILTERS,
        filters
    };
}

export function selectFilter(parentID, filterID, selected=true) {
    return {
        type : SELECT_FILTER,
        id : filterID,
        parentID,
        selected
    }
}

export function filtersSelected(filterIDs) {
    return {
        type : FILTERS_SELECTED,
        filterIDs
    }
}