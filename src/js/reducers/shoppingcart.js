import {fromJS} from "immutable";
import {ADD, UPDATE, DELETE} from "../constants/ActionTypes";

const initialState = fromJS({
    currencyCode : "USD",
    currencySymbol : "$",
    subtotal : "0",
    items : [],
    itemsById : {}
});

function calculateTotals(state) {
    let subtotal = 0;
    const itemsById = state.get("itemsById");
    itemsById.forEach(item => {
        let itemTotal = Math.round(item.get("qty") * item.get("price") * 100) / 100;
        subtotal += itemTotal;
        state = state.updateIn(["itemsById", item.get("key")], map => map.set("total", itemTotal));
    });

    return state.set("subtotal", Math.round(subtotal * 100) / 100);
}

function addItemToCart(state, action) {
    const itemsById = state.get("itemsById");
    const items = state.get("items");

    state = state.set("itemsById", itemsById.set(action.key, fromJS({
        key : action.key,
        name : action.name,
        price : action.price,
        qty : action.qty,
        total : 0,
        image : "/img/products/thumbnails/" + action.key + ".jpg"
    })));

    return calculateTotals(state.set("items", items.push(action.key)));
}

function updateItemQuantity(state, action) {
    return calculateTotals(state.updateIn(["itemsById", action.key], map => map.set("qty", action.qty)));
}

function deleteItemFromCart(state, action) {
    const itemsById = state.get("itemsById");
    const items = state.get("items");
    const itemIndex = items.indexOf(action.key);

    return calculateTotals(state
        .set("itemsById", itemsById.remove(action.key))
        .set("items", items.remove(itemIndex)));
}

export default function shoppingcart(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case ADD :
            return addItemToCart(state, action);

        case UPDATE :
            return updateItemQuantity(state, action);

        case DELETE :
            return deleteItemFromCart(state, action);

        default :
            return state;
    }
}