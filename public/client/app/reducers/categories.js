import {
    fromJS,
    Map
} from "immutable";

import {
    SET_CATEGORIES,
    SELECT_CATEGORY
} from "../constants/ActionTypes";

const initialState = Map();

export default function categories(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case SET_CATEGORIES :
            return state.mergeDeep(action.categories);

        case SELECT_CATEGORY :
            console.log(state.hasIn(["categories", "selectedCategories"]));
            return state;
    }

    return state;
}
