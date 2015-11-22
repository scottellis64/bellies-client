import {fromJS, Map} from "immutable";
import {
    SET_PRODUCTS,
    SELECT_CATEGORY,
    SELECT_FILTER
} from "../constants/ActionTypes";

const initialState = Map();
const productsKey = ["products"];
const pbcKey = ["pbc"];
const pbfKey = ["pbf"];

//
// Maps category to the number of items per category there are
//
function updateProductsByCategoryMap(state) {
    let pbcMap = Map();
    state = state.setIn(pbcKey, pbcMap);

    state.getIn(productsKey).forEach(product => {
        let categories = product.get("categories");
        if (categories) {
            categories.forEach(category => {
                let count = pbcMap.has(category) ? pbcMap.get(category) : 0;
                pbcMap = pbcMap.set(category, count + 1);
            });
        }
    });

    return state.setIn(pbcKey, pbcMap);
}

//
// Maps the filterID to the number of products there are in that match that filter
//
function updateProductsByFilterMap(state) {
    let pbfMap = Map();
    state = state.setIn(pbfKey, pbfMap);

    state.getIn(productsKey).forEach(product => {
        let filters = product.get("filters");
        if (filters) {
            filters.forEach(filter => {
                let count = pbfMap.has(filter) ? pbfMap.get(filter) : 0;
                pbfMap = pbfMap.set(filter, count + 1);
            });
        }
    });

    return state.setIn(pbfKey, pbfMap);
}

export default function products(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case SET_PRODUCTS :
            return updateProductsByCategoryMap(
                updateProductsByFilterMap(state.set("products", fromJS(action.products))));

        case SELECT_FILTER :
            return state;

        case SELECT_CATEGORY :
            return state;
    }

    return state;
}
