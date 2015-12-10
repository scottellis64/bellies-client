import React          from "react";
import ReactDOM       from "react-dom";
import Root           from "./containers/Root";
import store          from "./store/configureStore";

const target = document.getElementById("container");

const node = (
    <Root store={store}
          debug={true}
          debugExternal={false}/>
);

ReactDOM.render(node, target);
