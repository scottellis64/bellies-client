import {fromJS} from "immutable";
import {CREATE_ACCOUNT, SET_ACCOUNT_FIELD, LOGIN} from "../constants/ActionTypes";

const initialState = fromJS({
    firstName : "",
    lastName : "",
    gender : "",
    month : "",
    day : "",
    year : "",
    username : "",
    email : "",
    password : "",
    passwordConfirm : "",
    loggedIn : false
});

function setAccountField(state, accountData) {
    return state.merge(accountData);
}

function createAccount(state) {
    return state.set("loggedIn", true);
}

function login(state, username, password) {
    return state.merge({
        username,
        password,
        loggedIn : true
    });
}

export default function account(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case CREATE_ACCOUNT :
            return createAccount(state);

        case LOGIN :
            return login(state, action.username, action.password);

        case SET_ACCOUNT_FIELD :
            return setAccountField(state, action.account);

        default :
            return state;
    }
}