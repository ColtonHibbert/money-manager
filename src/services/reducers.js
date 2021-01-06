import {
    SET_ROUTE,
    SET_USER,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD
} from "./constants.js";

const initialState = {
    route: "login",
    user: {
        first_name: ""
    },
    login: {
       loginEmail: "",
       loginPassword: "" 
    },
    transactions: [],
    accounts: []

}

export const reducer = (state=initialState, action={}) => {
    if(action.type === SET_ROUTE ) {
        return {
            ...state,
            route: action.setRoutePayload
        }
    }
    if(action.type === SET_USER) {
        return {
            ...state,
            user: action.setUserPayload
        }
    }
    if(action.type === SET_LOGIN_EMAIL ) {
        return {
            ...state,
            login: {
                ...state.login,
                loginEmail: action.setLoginEmailPayload
               
            }
        }
    }
    if(action.type === SET_LOGIN_PASSWORD ) {
        return {
            ...state,
            login: {
                ...state.login,
                loginPassword: action.setLoginPasswordPayload
            }
        }
    }
    return state;
}