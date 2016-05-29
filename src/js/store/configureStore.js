import rootReducer          from "../reducers/index";
import thunk                from "redux-thunk";
import routes               from "../routes/index";
import {reduxReactRouter}   from "redux-router";
import createHistory        from "history/lib/createBrowserHistory";
import DevTools             from "../containers/DevTools";
import io                   from "socket.io-client";
import {fromJS}             from "immutable";

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

import {
    setLoginResponse
} from "../actions/AccountActions";

import {products} from "../actions/ProductActions";
import {filters} from "../actions/FilterActions"

import {SESSION_STATE_KEY, LOGIN_RESPONSE} from "../constants/ActionTypes";

import {
    applyMiddleware,
    compose,
    createStore
} from "redux";

import {createSelector} from "reselect";

import {
    sessionStorageSave,
    belliesServerMiddleware
} from "../middleware/index";

const socket = io(`${location.protocol}//${location.hostname}:8095`);

socket.on("state", state => {
    switch (state.action) {
        case LOGIN_RESPONSE:
            store.dispatch(setLoginResponse(state.account));
    }
});

function configureStore(debug = false) {
    let createStoreWithMiddleware;

    const middleware = applyMiddleware(belliesServerMiddleware(socket), sessionStorageSave);

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

    const storedState = JSON.parse(
        sessionStorage.getItem(SESSION_STATE_KEY)
    );

    let initialState = {};
    if (storedState) {
        for (var key in storedState) {
            if( storedState.hasOwnProperty(key) ) {
                initialState[key] = fromJS(storedState[key]);
            }
        }
    }

    return createStoreWithMiddleware(createStore)(
        rootReducer, initialState
    );
}

const store = configureStore(true);

//
// Load all filters and categories
//
store.dispatch(filters());

// Load all products, but see the to-do below
// todo: eventually products will only be loaded when selected filters and/or categories change and will not need to occur explicitly
store.dispatch(products());

export default store;
