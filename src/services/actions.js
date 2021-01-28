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
    SET_LOGIN_ERROR, 
    SET_LOGIN_ERROR_MESSAGE, 
    SET_CSRF,
    RESET_STATE,
    SET_LOGIN_REMEMBER_ME,
    SET_SIGNUP_REMEMBER_ME,
    SET_LOGIN_EMAIL_ERROR,
    SET_LOGIN_PASSWORD_ERROR,
    SET_SIGNUP_FIRST_NAME_ERROR,
    SET_SIGNUP_LAST_NAME_ERROR,
    SET_SIGNUP_EMAIL_ERROR,
    SET_SIGNUP_PASSWORD_ERROR,
    SET_SIGNUP_CONFIRM_PASSWORD_ERROR,
    SET_SIGNUP_PASSWORDS_MATCH_ERROR,
    SET_FORGOT_PASSWORD_EMAIL,
    SET_FORGOT_PASSWORD_ERROR,
    SET_FORGOT_PASSWORD_ERROR_MESSAGE,
    SET_FORGOT_PASSWORD_EMAIL_ERROR,
    SET_FORGOT_PASSWORD_EMAIL_SENT,
    SET_PASSWORD_RESET_PASSWORD,
    SET_PASSWORD_RESET_CONFIRM_PASSWORD,
    SET_PASSWORD_RESET_TOKEN,
    SET_PASSWORD_RESET_PASSWORD_ERROR,
    SET_PASSWORD_RESET_CONFIRM_PASSWORD_ERROR, 
    SET_PASSWORD_RESET_PASSWORDS_MATCH_ERROR,
    SET_PASSWORD_RESET_ERROR,
    SET_PASSWORD_RESET_ERROR_MESSAGE,
    SET_NAVIGATION_ACCOUNT_SELECTED,
    SET_MOBILE_MENU,
    TOGGLE_MOBILE_MENU, 
    SET_INITIAL_DATA,
    SET_ROUTE_HOME
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

export const setLoginRememberMe = () => {
    return {
        type: SET_LOGIN_REMEMBER_ME
    }
}

export const setSignUpRememberMe = () => {
    return {
        type: SET_SIGNUP_REMEMBER_ME
    }
}

export const setLoginEmailError = (payload) => {
    return {
        type: SET_LOGIN_EMAIL_ERROR,
        setLoginEmailErrorPayload: payload
    }
}


export const setLoginPasswordError = (payload) => {
    return {
        type: SET_LOGIN_PASSWORD_ERROR,
        setLoginPasswordErrorPayload: payload
    }
}

export const setSignUpFirstNameError = (payload) => {
    return {
        type: SET_SIGNUP_FIRST_NAME_ERROR,
        setSignUpFirstNameErrorPayload: payload
    }
}

export const setSignUpLastNameError = (payload) => {
    return {
        type: SET_SIGNUP_LAST_NAME_ERROR,
        setSignUpLastNameErrorPayload: payload
    }
}

export const setSignUpEmailError = (payload) => {
    return {
        type: SET_SIGNUP_EMAIL_ERROR,
        setSignUpEmailErrorPayload: payload
    }
}

export const setSignUpPasswordError = (payload) => {
    return {
        type: SET_SIGNUP_PASSWORD_ERROR,
        setSignUpPasswordErrorPayload: payload
    }
}

export const setSignUpConfirmPasswordError = (payload) => {
    return {
        type: SET_SIGNUP_CONFIRM_PASSWORD_ERROR,
        setSignUpConfirmPasswordErrorPayload: payload
    }
}

export const setSignUpPasswordsMatchError = (payload) => {
    return {
        type: SET_SIGNUP_PASSWORDS_MATCH_ERROR,
        setSignUpPasswordsMatchErrorPayload: payload
    }
}

export const setForgotPasswordEmail = (payload) => {
    return {
        type: SET_FORGOT_PASSWORD_EMAIL,
        setForgotPasswordEmailPayload: payload
    }
}

export const setForgotPasswordError = (payload) => {
    return {
        type: SET_FORGOT_PASSWORD_ERROR,
        setForgotPasswordErrorPayload: payload
    }
}

export const setForgotPasswordErrorMessage = (payload) => {
    return {
        type: SET_FORGOT_PASSWORD_ERROR_MESSAGE,
        setForgotPasswordErrorMessagePayload: payload
    }
}

export const setForgotPasswordEmailError = (payload) => {
    return {
        type: SET_FORGOT_PASSWORD_EMAIL_ERROR,
        setForgotPasswordEmailErrorPayload: payload
    }
}

export const setForgotPasswordEmailSent = (payload) => {
    return {
        type: SET_FORGOT_PASSWORD_EMAIL_SENT,
        setForgotPasswordEmailSentPayload: payload
    }
}

export const setPasswordResetPassword = (payload) => {
    return {
        type: SET_PASSWORD_RESET_PASSWORD,
        setPasswordResetPasswordPayload: payload
    }
}

export const setPasswordResetConfirmPassword = (payload) => {
    return {
        type: SET_PASSWORD_RESET_CONFIRM_PASSWORD,
        setPasswordResetConfirmPasswordPayload: payload
    }
}

export const setPasswordResetToken = (payload) => {
    return {
        type: SET_PASSWORD_RESET_TOKEN,
        setPasswordResetTokenPayload: payload
    }
}

export const setPasswordResetPasswordError = (payload) => {
    return {
        type: SET_PASSWORD_RESET_PASSWORD_ERROR,
        setPasswordResetPasswordErrorPayload: payload
    }
}

export const setPasswordResetConfirmPasswordError = (payload) => {
    return {
        type: SET_PASSWORD_RESET_CONFIRM_PASSWORD_ERROR,
        setPasswordResetConfirmPasswordErrorPayload: payload
    }
}

export const setPasswordResetPasswordsMatchError = (payload) => {
    return {
        type: SET_PASSWORD_RESET_PASSWORDS_MATCH_ERROR,
        setPasswordResetPasswordsMatchErrorPayload: payload
    }
}

export const setPasswordResetError = (payload) => {
    return {
        type: SET_PASSWORD_RESET_ERROR,
        setPasswordResetErrorPayload: payload
    }
}

export const setPasswordResetErrorMessage = (payload) => {
    return {
        type: SET_PASSWORD_RESET_ERROR_MESSAGE,
        setPasswordResetErrorMessagePayload: payload
    }
}

export const setNavigationAccountSelected = () => {
    return {
        type: SET_NAVIGATION_ACCOUNT_SELECTED
    }
}

export const setMobileMenu = (payload) => {
    return {
        type: SET_MOBILE_MENU,
        setMobileMenuPayload: payload
    }
}

export const toggleMobileMenu = () => {
    return {
        type: TOGGLE_MOBILE_MENU
    }
}

export const setInitialData = (payload) => {
    return {
        type: SET_INITIAL_DATA,
        setInitialDataPayload: (payload)
    }
}

export const setRouteHome = (payload) => {
    return {
        type: SET_ROUTE_HOME,
        setRouteHomePayload: payload
    }
}