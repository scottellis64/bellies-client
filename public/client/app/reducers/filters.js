import {fromJS, Map} from "immutable";
import {
    SET_FILTERS
} from "../constants/ActionTypes";

const initialState = Map();

export default function filters(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case SET_FILTERS :
            return state.set("filters", fromJS(action.filters));
    }

    return state;
}
