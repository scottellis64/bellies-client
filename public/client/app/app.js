import React          from "react";
import ReactDOM       from "react-dom";
import Root           from "./containers/Root";
import {products}     from "./actions/ProductActions";
import {filters}      from "./actions/FilterActions";
import {categories}   from "./actions/CategoryActions";
import store          from "./store/configureStore";

const target = document.getElementById("container");

store.dispatch(products());
store.dispatch(filters());
store.dispatch(categories());

const node = (
    <Root store={store}
          debug={true}
          debugExternal={false}/>
);

ReactDOM.render(node, target);
