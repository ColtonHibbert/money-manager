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
    SET_PASSWORD_RESET_ERROR_MESSAGE
} from "./constants.js";

const initialState = {
    accounts: [
        {
            accountId: "",
            accountName: "",
            accountTypeId: "",
            currentBalance: "",
            lowAlertBalance: "",
            userId: ""
        }
    ],
    forgotPassword: {
        forgotPasswordEmail: "",
        forgotPasswordEmailSent: false,
    },
    forgotPasswordErrors: {
        forgotPasswordError: false,
        forgotPasswordErrorMessage: "",
        forgotPasswordEmailError: ""
    },
    login: {
        loginEmail: "",
        loginPassword: "",
        loginRememberMe: false,
     },
    loginErrors: {
        loginError: false,
        loginErrorMessage: "",
        loginEmailError: false,
        loginPasswordError: false,
    },
    passwordReset: {
        passwordResetPassword: "",
        passwordResetConfirmPassword: "",
        passwordResetToken: ""
    },
    passwordResetErrors: {
        passwordResetError: false,
        passwordResetErrorMessage: "",
        passwordResetPasswordError: false,
        passwordResetConfirmPasswordError: false,
        passwordResetPasswordsMatchError: false
    },
    route: "loading",
    signUp: {
        signUpFirstName: "",
        signUpLastName: "",
        signUpEmail: "",
        signUpPassword: "",
        signUpConfirmPassword: "",
        signUpRememberMe: false
    },
    signUpErrors: {
        signUpError: false,
        signUpErrorMessage: "",
        signUpFirstNameError: false,
        signUpLastNameError: false,
        signUpEmailError: false,
        signUpPasswordError: false,
        signUpConfirmPasswordError: false,
        signUpPasswordsMatchError: false
    },
    transactions: [
        {
            transactionId: "",
            amount: "",
            date: "",
            memoNote: "",
            userId: "",
            accountTypeId: ""
        }
    ],
    user: {
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        about: "",
        joined: "",
        householdMemberId: "",
        householdId: "",
        roleId: "",
        csrf: "",
    }
    
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
    if(action.type === SET_SIGNUP_FIRST_NAME) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpFirstName: action.setSignUpFirstNamePayload
            }
        }
    }
    if(action.type === SET_SIGNUP_LAST_NAME ) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpLastName: action.setSignUpLastNamePayload
            }
        }
    }
    if(action.type === SET_SIGNUP_EMAIL) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpEmail: action.setSignUpEmailPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_PASSWORD) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpPassword: action.setSignUpPasswordPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_CONFIRM_PASSWORD ) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpConfirmPassword: action.setSignUpConfirmPasswordPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_ERROR ) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpError: action.setSignUpErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_ERROR_MESSAGE ) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpErrorMessage: action.setSignUpErrorMessagePayload
            }
        }
    }
    if(action.type === SET_LOGIN_ERROR) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginError: action.setLoginErrorPayload
            }
        }
    }
    if(action.type === SET_LOGIN_ERROR_MESSAGE) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginErrorMessage: action.setLoginErrorMessagePayload
            }
        }
    }
    if(action.type === SET_CSRF) {
        return {
            ...state,
            user: {
                ...state.user,
                csrf: action.setCSRFPayload
            }
        }
    }
    if(action.type === SET_ACCOUNTS) {
        return {
            ...state,
            accounts: action.setAccountsPayload
        }
    }
    if(action.type === SET_TRANSACTIONS ) {
        return {
            ...state,
            transactions: action.setTransactionsPayload
        }
    }
    if(action.type === RESET_STATE) {
        return initialState;
    }
    if(action.type === SET_LOGIN_REMEMBER_ME ) {
        return {
            ...state,
            login: {
                ...state.login,
                loginRememberMe: !state.login.loginRememberMe
            }
        }
    }
    if(action.type === SET_SIGNUP_REMEMBER_ME) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpRememberMe: !state.signUp.signUpRememberMe
            }
        }
    }
    if(action.type === SET_LOGIN_EMAIL_ERROR ) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginEmailError: action.setLoginEmailErrorPayload
            }
        }
    }
    if(action.type === SET_LOGIN_PASSWORD_ERROR ) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginPasswordError: action.setLoginPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_FIRST_NAME_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpFirstNameError: action.setSignUpFirstNameErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_LAST_NAME_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpLastNameError: action.setSignUpLastNameErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_EMAIL_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpEmailError: action.setSignUpEmailErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_PASSWORD_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpPasswordError: action.setSignUpPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_CONFIRM_PASSWORD_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpConfirmPasswordError: action.setSignUpConfirmPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpPasswordsMatchError: action.setSignUpPasswordsMatchErrorPayload
            }
        }
    }
    if(action.type === SET_FORGOT_PASSWORD_EMAIL) {
        return {
            ...state,
            forgotPassword: {
                ...state.forgotPassword,
                forgotPasswordEmail: action.setForgotPasswordEmailPayload
            }
        }
    }
    if(action.type === SET_FORGOT_PASSWORD_ERROR) {
        return {
            ...state,
            forgotPasswordErrors: {
                ...state.forgotPasswordErrors,
                forgotPasswordError: action.setForgotPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_FORGOT_PASSWORD_ERROR_MESSAGE) {
        return {
            ...state,
            forgotPasswordErrors: {
                ...state.forgotPasswordErrors,
                forgotPasswordErrorMessage: action.setForgotPasswordErrorMessagePayload
            }
        }
    }
    if(action.type === SET_FORGOT_PASSWORD_EMAIL_ERROR) {
        return {
            ...state,
            forgotPasswordErrors: {
                ...state.forgotPasswordErrors,
                forgotPasswordEmailError: action.setForgotPasswordEmailErrorPayload
            }
        }
    }
 
    if(action.type === SET_FORGOT_PASSWORD_EMAIL_SENT) {
        return {
            ...state,
            forgotPassword: {
                ...state.forgotPassword,
                forgotPasswordEmailSent: action.setForgotPasswordEmailSentPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_PASSWORD) {
        return {
            ...state, 
            passwordReset: {
                ...state.passwordReset,
                passwordResetPassword: action.setPasswordResetPasswordPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_CONFIRM_PASSWORD) {
        return {
            ...state,
            passwordReset: {
                ...state.passwordReset,
                passwordResetConfirmPassword: action.setPasswordResetConfirmPasswordPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_TOKEN) {
        return {
            ...state,
            passwordReset: {
                ...state.passwordReset,
                passwordResetToken: action.setPasswordResetTokenPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_PASSWORD_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetPasswordError: action.setPasswordResetPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_CONFIRM_PASSWORD_ERROR) {
        return {
            ...state, 
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetConfirmPasswordError: setPasswordResetConfirmPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetPasswordsMatchError: setPasswordResetPasswordsMatchErrorPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetError: setPasswordResetErrorPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_ERROR_MESSAGE) {
        return {
            ...state, 
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetErrorMessage: action.setPasswordResetErrorMessagePayload
            }
        }
    }
    return state;
}