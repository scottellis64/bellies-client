import {
    CREATE_ACCOUNT,
    SET_ACCOUNT_FIELD,
    LOGOUT,
    LOGIN,
    LOGIN_RESPONSE,
    SET_LOGIN_FIELD_INVALID
} from "../constants/ActionTypes";

export function createAccount() {
    return {
        type : CREATE_ACCOUNT
    }
}

export function setField(account) {
    return {
        type : SET_ACCOUNT_FIELD,
        account
    };
}

export function login(email, password) {
    return {
        type : LOGIN,
        email,
        password,
        meta : {
            remote : true
        }
    };
}

export function setLoginResponse(account) {
    return {
        type : LOGIN_RESPONSE,
        account
    };
}

export function logout() {
    return {
        type : LOGOUT
    };
}

export function setFormValidationErrors(formErrors) {
    return {
        type : SET_LOGIN_FIELD_INVALID,
        formErrors
    };
}
