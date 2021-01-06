import {
    SET_ROUTE,
    SET_USER, 
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD
} from "./constants.js";


export const setRoute = (payload) => {
    return {
        type: SET_ROUTE,
        setRoutePayload: payload
    }
}

export const setUser = (payload) => {
    return {
        type: SET_USER,
        setUserPayload: payload
    }
}

export const setLoginEmail = (payload) => {
    return {
        type: SET_LOGIN_EMAIL,
        setLoginEmailPayload: payload
    }
}

export const setLoginPassword = (payload) => {
    return {
        type: SET_LOGIN_PASSWORD, 
        setLoginPasswordPayload: payload
    }
}



