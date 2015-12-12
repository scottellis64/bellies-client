import {fromJS} from "immutable";
import {ADD, UPDATE, DELETE} from "../constants/ActionTypes";

const initialState = fromJS({
    currencyCode : "USD",
    currentySymbol : "$",
    subtotal : "616.58",

    items : ["1", "2", "3"],
    itemsById : {
        "1" : {
            key : "1",
            image : "/bellies/img/thumb/05.jpg",
            name : "Watch",
            price : "400.00",
            qty : 2
        },
        "2" : {
            key : "2",
            image : "/bellies/img/thumb/02.jpg",
            name : "Black Glasses",
            price : "150.59",
            qty : 1
        },
        "3" : {
            key : "3",
            image : "/bellies/img/thumb/03.jpg",
            name : "Keys",
            price : "65.99",
            qty : 5
        }
    }
});

export default function shoppingcart(state = initialState, action = {type : "NONE"}) {
    //switch (action.type) {
    //    case ADD :
    //        const newId = state.items[state.items.length - 1] + 1;
    //        const items = state.items.concat(newId);
    //        const stateItems = state.itemsById;
    //
    //        return {
    //            ...state,
    //
    //            items : items,
    //
    //            itemsById : {
    //                ...stateItems,
    //
    //                [newId] : {
    //                    key : newId,
    //                    name : action.name,
    //                    qty : action.qty
    //                }
    //            }
    //        };
    //
    //    case UPDATE :
    //        return {
    //            ...state,
    //
    //            itemsById : mapValues(state.itemsById, (item) => {
    //                return item.key === action.key ?
    //                    assign({}, item, {qty : action.qty}) :
    //                    item
    //            })
    //        };
    //
    //    case DELETE :
    //        return {
    //            ...state,
    //
    //            items : state.items.filter(key => key !== action.key),
    //
    //            itemsById: omit(state.itemsById, action.key)
    //        };
    //
    //    default :
    //        return state;
    //}
    return state;
}