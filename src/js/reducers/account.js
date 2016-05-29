import {fromJS} from "immutable";
import {
    CREATE_ACCOUNT,
    SET_ACCOUNT_FIELD,
    LOGOUT,
    LOGIN_RESPONSE,
    SET_LOGIN_FIELD_INVALID
} from "../constants/ActionTypes";

const initialState = fromJS({
    firstName : "",
    lastName : "",
    gender : "",
    month : "",
    day : "",
    year : "",
    email : "",
    password : "",
    passwordConfirm : "",
    loggedIn : false,
    rememberMe : false,
    formErrors : []
});

function setField(state, account) {
    return state.merge(account);
}

function createAccount(state) {
    return state.set("loggedIn", true);
}

function setLoginResponse(state, account) {
    //
    // Remove all previous validation errors.  If there are any problems with login we will add new ones
    //
    state = state.remove("formErrors");

    if (! account.loggedIn) {
        account.formErrors = [];
        account.formErrors.push({
            id : "email",
            error : account.failureReason
        });

        account.formErrors.push({
            id : "password"
        })
    }

    account.failureReason = undefined;

    return state.merge(account);
}

function logout() {
    return initialState;
}

function setLoginFieldInvalid(state, formErrors) {
    return state.set("formErrors", formErrors);
}

export default function account(state = initialState, action = {type : "NONE"}) {
    switch (action.type) {
        case CREATE_ACCOUNT :
            return createAccount(state);

        case LOGIN_RESPONSE :
            return setLoginResponse(state, action.account);

        case LOGOUT :
            return logout(state);

        case SET_ACCOUNT_FIELD :
            return setField(state, action.account);

        case SET_LOGIN_FIELD_INVALID :
            return setLoginFieldInvalid(state, action.formErrors);

        default :
            return state;
    }
}