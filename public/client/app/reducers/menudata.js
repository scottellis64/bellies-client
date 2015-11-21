import {fromJS} from "immutable";

const initialState = fromJS({
    menus: [{
        label: "Pages",
        key : "mainMenu",
        className: "dropdown active",
        items: [{
            label: "Login",
            path : "/bellies/login"
        },{
            label: "Home",
            path : "/bellies"
        },{
            label: "Check Out",
            path : "/bellies/checkout"
        },{
            label: "Product",
            path : "/bellies/product"
        },{
            label: "Filter Grid",
            path : "/bellies/fgrid"
        },{
            label: "Filter List",
            path : "/bellies/flist"
        },{
            label: "Register",
            path : "/bellies/register"
        }]
    }]
});

export default function menudata(state = initialState) {
    return state;
}