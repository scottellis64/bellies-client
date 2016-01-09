import {
    GET_BILLING_INFO,
    UPDATE_BILLING_ADDRESS,
    UPDATE_SHIPPING_ADDRESS
} from "../constants/ActionTypes";

export function billingInfo() {
    return {
        type : GET_BILLING_INFO
    }
}

export function updateBillingAddress(address) {
    return {
        type : UPDATE_BILLING_ADDRESS,
        address
    }
}
export function updateShippingAddress(address) {
    return {
        type : UPDATE_SHIPPING_ADDRESS,
        address
    }
}