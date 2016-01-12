import {CREATE_ACCOUNT, SET_ACCOUNT_FIELD, LOGIN} from "../constants/ActionTypes";

export function createAccount() {
    return {
        type : CREATE_ACCOUNT
    }
}

export function setAccountField(accountData) {
    return {
        type : SET_ACCOUNT_FIELD,
        account : {
            ...accountData
        }
    };
}

export function login(username, password) {
    return {
        type : LOGIN,
        username,
        password
    };
}
