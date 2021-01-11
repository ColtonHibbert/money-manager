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
    DISPLAY_SIGNUP_ERROR
} from "./constants.js";

const initialState = {
    route: "login",
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
        roleId: ""
    },
    login: {
       loginEmail: "",
       loginPassword: "" 
    },
    signup: {
        signupFirstName: "",
        signupLastName: "",
        signupEmail: "",
        signupPassword: "",
        signupConfirmPassword: ""
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
    accounts: [
        {
            accountId: "",
            accountName: "",
            currentBalance: "",
            lowAlertBalance: "",
            userId: "",
            accountTypeId: ""
        }
    ],
    errors: {
        signUpError: false,
        signUpErrorMessage: "",
        displaySignUpError: false
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
            signup: {
                ...state.signup,
                signupFirstName: action.setSignUpFirstNamePayload
            }
        }
    }
    if(action.type === SET_SIGNUP_LAST_NAME ) {
        return {
            ...state,
            signup: {
                ...state.signup,
                signupLastName: action.setSignUpLastNamePayload
            }
        }
    }
    if(action.type === SET_SIGNUP_EMAIL) {
        return {
            ...state,
            signup: {
                ...state.signup,
                signupEmail: action.setSignUpEmailPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_PASSWORD) {
        return {
            ...state,
            signup: {
                ...state.signup,
                signupPassword: action.setSignUpPasswordPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_CONFIRM_PASSWORD ) {
        return {
            ...state,
            signup: {
                ...state.signup,
                signupConfirmPassword: action.setSignUpConfirmPasswordPayload
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
    if(action.type === SET_SIGNUP_ERROR ) {
        return {
            ...state,
            errors: {
                ...state.errors,
                setSignUpError: action.setSignUpErrorPayload
            }
        }
    }
    if(action.type === SET_SIGNUP_ERROR_MESSAGE ) {
        return {
            ...state,
            errors: {
                ...state.errors,
                setSignUpErrorMessage: action.setSignUpErrorMessagePayload
            }
        }
    }
    if(action.type === DISPLAY_SIGNUP_ERROR ) {
        return {
            ...state,
            errors: {
                ...state.errors,
                displaySignUpError: action.displaySignUpErrorPayload
            }
        }
    }
    return state;
}