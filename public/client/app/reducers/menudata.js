import {fromJS} from "immutable";

const initialState = fromJS({
    menus: [{
        label: "Pages",
        key : "mainMenu",
        className: "dropdown active",
        items: [{
            key: "miLogin",
            label: "Login",
            path : "/bellies/login"
        },{
            key: "miHome",
            label: "Home",
            path : "/bellies"
        },{
            key: "miCheckOut",
            label: "Check Out",
            path : "/bellies/checkout"
        },{
            key: "miProduct",
            label: "Product",
            path : "/bellies/product"
        },{
            key: "miFilterGrid",
            label: "Filter Grid",
            path : "/bellies/fgrid"
        },{
            key: "miFilterList",
            label: "Filter List",
            path : "/bellies/flist"
        },{
            key: "miRegister",
            label: "Register",
            path : "/bellies/register"
        }]
    }]
});

export default function menudata(state = initialState) {
    return state;
}