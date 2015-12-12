import {fromJS} from "immutable";

const initialState = fromJS({
    menus: [{
        label: "Pages",
        key : "mainMenu",
        className: "dropdown active",
        items: [{
            key: "miLogin",
            label: "Login",
            path : "/login"
        },{
            key: "miHome",
            label: "Home",
            path : ""
        },{
            key: "miCheckOut",
            label: "Check Out",
            path : "/checkout"
        },{
            key: "miProduct",
            label: "Product",
            path : "/product"
        },{
            key: "miFilterGrid",
            label: "Filter Grid",
            path : "/fgrid"
        },{
            key: "miFilterList",
            label: "Filter List",
            path : "/flist"
        },{
            key: "miRegister",
            label: "Register",
            path : "/register"
        }]
    }]
});

export default function menudata(state = initialState) {
    return state;
}