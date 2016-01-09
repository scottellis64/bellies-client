import {fromJS} from "immutable";

import address from "../data/addressData";

import {
    GET_BILLING_INFO,
    UPDATE_BILLING_ADDRESS,
    UPDATE_SHIPPING_ADDRESS
} from "../constants/ActionTypes";

const initialState = fromJS({
    billingAddress : address.toJS(),
    shippingAddress : address.toJS()
});

export default function billingInfo(state = initialState, action = {type : "NONE"}) {
    switch(action.type) {
        case GET_BILLING_INFO : {
            return state;
        }

        case UPDATE_BILLING_ADDRESS : {
            return state.mergeIn(["billingAddress"], action.address);
        }

        case UPDATE_SHIPPING_ADDRESS : {
            return state.mergeIn(["shippingAddress"], action.address);
        }
    }

    return state;
}