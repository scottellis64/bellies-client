import {fromJS, Map} from "immutable";
import {
    SET_PRODUCTS,
    SELECT_CATEGORY
} from "../constants/ActionTypes";

const initialState = Map();
const productsKey = ["products"];
const pbcKey = ["pbc"];

function updateProductsByCategoryMap(state) {
    let pbcMap = pbcMap = Map();
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

export default function products(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case SET_PRODUCTS :
            return updateProductsByCategoryMap(state.set("products", fromJS(action.products)));

        case SELECT_CATEGORY :
            console.log(state.hasIn(["categories", "selectedCategories"]));
            return state;
    }

    return state;
}
