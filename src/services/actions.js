import {
    SET_ROUTE,
    SET_USER, 
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_SIGNUP_FIRST_NAME,
    SET_SIGNUP_LAST_NAME,
    SET_SIGNUP_EMAIL,
    SET_SIGNUP_PASSWORD,
    SET_SIGNUP_CONFIRM_PASSWORD, 
    SET_ACCOUNTS,
    SET_TRANSACTIONS,
    SET_SIGNUP_ERROR,
    SET_SIGNUP_ERROR_MESSAGE,
    DISPLAY_SIGNUP_ERROR, 
    SET_LOGIN_ERROR, 
    SET_LOGIN_ERROR_MESSAGE, 
    DISPLAY_LOGIN_ERROR, 
    SET_CSRF,
    RESET_STATE,
    SET_PASSWORD_RESET_EMAIL
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

export const setSignUpFirstName = (payload) => {
    return {
        type: SET_SIGNUP_FIRST_NAME,
        setSignUpFirstNamePayload: payload
    }
}

export const setSignUpLastName = (payload) => {
    return {
        type: SET_SIGNUP_LAST_NAME,
        setSignUpLastNamePayload: payload
    }
}

export const setSignUpEmail = (payload) => {
    return {
        type: SET_SIGNUP_EMAIL,
        setSignUpEmailPayload: payload
    }
}

export const setSignUpPassword = (payload) => {
    return {
        type: SET_SIGNUP_PASSWORD,
        setSignUpPasswordPayload: payload
    }
}

export const setSignUpConfirmPassword = (payload) => {
    return {
        type: SET_SIGNUP_CONFIRM_PASSWORD,
        setSignUpConfirmPasswordPayload: payload
    }
}

export const setAccounts = (payload) => {
    return {
        type: SET_ACCOUNTS,
        setAccountsPayload: payload
    }
}

export const setTransactions = (payload) => {
    return {
        type: SET_TRANSACTIONS,
        setTransactionsPayload: payload
    }
}

export const setSignUpError = (payload) => {
    return {
        type: SET_SIGNUP_ERROR,
        setSignUpErrorPayload: payload
    }
}

export const setSignUpErrorMessage = (payload) => {
    return {
        type: SET_SIGNUP_ERROR_MESSAGE,
        setSignUpErrorMessagePayload: payload
    }
}

export const displaySignUpError = (payload) => {
    return {
        type: DISPLAY_SIGNUP_ERROR,
        displaySignUpErrorPayload: payload
    }
}

export const setLoginError = (payload) => {
    return {
        type: SET_LOGIN_ERROR,
        setLoginErrorPayload: payload
    }
}

export const setLoginErrorMessage = (payload) => {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        setLoginErrorMessagePayload: payload
    }
}

export const displayLoginError = (payload) => {
    return {
        type: DISPLAY_LOGIN_ERROR,
        displayLoginErrorPayload: payload
    }
}

export const setCSRF = (payload) => {
    return {
        type: SET_CSRF,
        setCSRFPayload: payload
    }
}

export const resetState = () => {
    return {
        type: RESET_STATE
    }
}

export const setPasswordResetEmail = (payload) => {
    return {
        type: SET_PASSWORD_RESET_EMAIL,
        setPasswordResetEmailPayload: payload
    }
}
