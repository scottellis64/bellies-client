import rootReducer          from "../reducers/index";
import thunk                from "redux-thunk";
import routes               from "../routes/index";
import {reduxReactRouter}   from "redux-router";
import createHistory        from "history/lib/createBrowserHistory";
import DevTools             from "../containers/DevTools";
import serverMiddleware     from "./bellies-server-middleware";
import io                   from "socket.io-client";
import {Map}                from "immutable";

//import {
//    setProducts
//} from "../actions/ProductActions";
//
//import {
//    setFilters,
//    filtersSelected
//} from "../actions/FilterActions"
//
//import {
//    setCategories
//} from "../actions/CategoryActions"

import {products} from "../actions/ProductActions";
import {filters} from "../actions/FilterActions"


import {
    applyMiddleware,
    compose,
    createStore
} from "redux";

//const socket = io(`${location.protocol}//${location.hostname}:8090`);
//socket.on("state", state => {
//    if (state.products) {
//        store.dispatch(setProducts(state.products));
//    }
//
//    if (state.filters) {
//        store.dispatch(setFilters(state.filters));
//    }
//
//    if (state.categories) {
//        store.dispatch(setCategories(state.categories));
//    }
//
//    if (state.selectedFilters) {
//        store.dispatch(filtersSelected(state.selectedFilters));
//    }
//});

function configureStore(initialState = {}, debug = false) {
    let createStoreWithMiddleware;

    const middleware = applyMiddleware(serverMiddleware(null));

    if (debug) {
        createStoreWithMiddleware = compose(
            middleware,
            reduxReactRouter({routes, createHistory}),
            DevTools.instrument()
        );
    } else {
        createStoreWithMiddleware = compose(
            middleware,
            reduxReactRouter({routes, createHistory})
        );
    }

    return createStoreWithMiddleware(createStore)(
        rootReducer, initialState
    );
}


const store = configureStore({}, true);

//
// Load all filters and categories
//
store.dispatch(filters());

// Load all products, but see the to-do below
// todo: eventually products will only be loaded when selected filters and/or categories change and will not need to occur explicitly
store.dispatch(products());

export default store;
