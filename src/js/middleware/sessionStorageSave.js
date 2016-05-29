import {SESSION_STATE_KEY} from "../constants/ActionTypes";
import {fromJS} from "immutable";

export default store => next => action => {
    //
    // Execute the next action now to allow the state to update to the latest
    //
    next(action);

    //
    // Get the latest state
    //
    const state = store.getState();
    if (! state) {
        return;
    }

    //
    // The state is a regular javascript object but all its properties are immutable objects that need to
    // be converted to regular javascript objects before persisting to the session store.  Create newState
    // to hold this pure javascript view of the entire state
    //
    let newState = {};
    for (var key in state) {
        if( state.hasOwnProperty(key) ) {
            if (state[key].toJS) {
                newState[key] = state[key].toJS();
            }
        }
    }

    sessionStorage.setItem(SESSION_STATE_KEY, JSON.stringify(newState));
}
