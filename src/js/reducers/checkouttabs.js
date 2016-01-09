import {fromJS} from "immutable";

const initialState = fromJS({
    tabs : [{
        key : "cartitems",
        label : "Shopping Cart",
        description : "Review & edit your products",
        className : "fa-check"
    },{
        key : "billinginfo",
        label : "Billing info",
        description : "Shipping and address info",
        className : "fa-home"
    },{
        key : "paymentmethod",
        label : "Payment",
        description : "Select payment method",
        className : "fa-credit-card"
    }]
});

export default function checkouttabs(state = initialState) {
    return state;
}