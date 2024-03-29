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
    SET_ROUTE_HOME,
    SET_NAVIGATION_EDIT_PROFILE,
    SET_NAVIGATION_EDIT_EMAIL,
    SET_NAVIGATION_EDIT_PASSWORD,
    SET_PROFILE_FIRST_NAME,
    SET_PROFILE_LAST_NAME,
    SET_PROFILE_ADDRESS,
    SET_PROFILE_PHONE,
    SET_PROFILE_ABOUT,
    SET_PROFILE_EMAIL,
    SET_PROFILE_PASSWORD,
    SET_PROFILE_CONFIRM_PASSWORD,
    SET_PROFILE_ERRORS_ERROR,
    SET_PROFILE_ERRORS_ERROR_MESSAGE,
    SET_PROFILE_ERRORS_EMAIL_ERROR,
    SET_PROFILE_ERRORS_PASSWORD_ERROR,
    SET_PROFILE_ERRORS_CONFIRM_PASSWORD_ERROR,
    SET_PROFILE_ERRORS_PASSWORDS_MATCH_ERROR,
    SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR,
    SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR_MESSAGE,
    SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR,
    SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR_MESSAGE,
    SET_USER_PROFILE_DATA,
    SET_USER_PROFILE_EMAIL,
    SET_ACCOUNT_SUMMARY_ENTRIES,
    SET_ACCOUNT_SUMMARY_TOTAL_PAGES,
    SET_ACCOUNT_SUMMARY_PAGES,
    SET_ACCOUNT_SUMMARY_CURRENT_PAGE,
    SET_ACCOUNT_SUMMARY_FILTER,
    SET_ACCOUNT_SUMMARY_FILTERED_ACCOUNTS,
    SET_ACCOUNT_SUMMARY_FILTER_TOTAL_PAGES,
    SET_ACCOUNT_SUMMARY_FILTER_CURRENT_PAGE,
    SET_ACCOUNT_SUMMARY_FILTER_PAGES,
    SET_ACCOUNT_SUMMARY_ACCOUNTS,
    SET_ACCOUNT_SUMMARY_SEARCH,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_TRANSACTION_SELECTION,
    SET_INDIVIDUAL_ACCOUNTS_ENTRIES,
    SET_INDIVIDUAL_ACCOUNTS_TOTAL_PAGES,
    SET_INDIVIDUAL_ACCOUNTS_PAGES,
    SET_INDIVIDUAL_ACCOUNTS_CURRENT_PAGE,
    SET_INDIVIDUAL_ACCOUNTS_FILTER,
    SET_INDIVIDUAL_ACCOUNTS_FILTERED_TRANSACTIONS,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_TOTAL_PAGES,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_CURRENT_PAGE,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_PAGES,
    SET_INDIVIDUAL_ACCOUNTS_TRANSACTIONS,
    SET_INDIVIDUAL_ACCOUNTS_SEARCH,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_NAME,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_TYPE_ID,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_LOW_ALERT_BALANCE,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR_MESSAGE,
    SET_INDIVIDUAL_ACCOUNTS_UPDATE_ACCOUNT,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_MEMO_NOTE,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_DATA,
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_CLEAR,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_AMOUNT,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_TRANSACTION_TYPE_ID,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_MEMO_NOTE,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_CANCEL,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DELETE_DISPLAY,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DATA,
    SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DELETE_CONFIRMATION,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_AMOUNT,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_TRANSACTION_TYPE_ID,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_MEMO_NOTE,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_CANCEL,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DELETE_DISPLAY,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_ERROR,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DATA,
    SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DELETE_CONFIRMATION,
    SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_DISPLAY,
    SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_TEXT_VALIDATE,
    SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_CONFIRMATION,
    SET_ADD_ACCOUNT_ACCOUNT_NAME,
    SET_ADD_ACCOUNT_ACCOUNT_TYPE_ID,
    SET_ADD_ACCOUNT_CURRENT_BALANCE,
    SET_ADD_ACCOUNT_LOW_ALERT_BALANCE,
    SET_ADD_ACCOUNT_ERROR,
    SET_ADD_ACCOUNT_CONFIRMATION,
    SET_DASHBOARD_DISPLAY_BUDGET_CARD,
    SET_DASHBOARD_BUDGET_CARD_CATEGORY_NAME,
    SET_DASHBOARD_BUDGET_CARD_BUDGET_AMOUNT,
    SET_DASHBOARD_BUDGET_CARD_CREATE_CATEGORY_ERROR,
    SET_DASHBOARD_BUDGET_CARD_SELECTED_CATEGORY,
    SET_DASHBOARD_BUDGET_CARD_ITEM_NAME,
    SET_DASHBOARD_BUDGET_CARD_CREATE_ITEM_ERROR,
    SET_DASHBOARD_BUDGET_CARD_CREATE_CATEGORY_DATA,
    SET_DASHBOARD_BUDGET_CARD_CREATE_ITEM_DATA,
    SET_DASHBOARD_BUDGET_CARD_CATEGORY_TO_DELETE,
    SET_DASHBOARD_BUDGET_CARD_CATEGORY_TO_DELETE_DATA,
    SET_DASHBOARD_BUDGET_CARD_CATEGORY_ITEM_TO_DELETE,
    SET_DASHBOARD_BUDGET_CARD_CATEGORY_ITEM_TO_DELETE_DATA
} from "./constants.js";
import {
    pagesArray,
    configurePagesInReducer
} from "./functions.js";

const initialState = {
    accounts: [
        {
            accountId: 0,
            accountName: "",
            accountTypeId: 0,
            currentBalance: 0,
            lowAlertBalance: 0,
            userId: 0
        }
    ],
    accountSummary: {
        accounts: [
            {
                accountId: 0,
                accountName: "",
                accountTypeId: 0,
                currentBalance: 0,
                lowAlertBalance: 0,
                userId: 0
            }
        ],
        entries: 1,
        currentPage: 0,
        totalPages: 0,
        pages: [
            {
                pageNumber: 0,
                startEntry: 0,
                finishEntry: 0,
            }
        ],
        filter: false,
        filteredAccounts: [
            {
                accountId: 0,
                accountName: "",
                accountTypeId: 0,
                currentBalance: 0,
                lowAlertBalance: 0,
                userId: 0
            }
        ],
        filterTotalPages: 0,
        filterCurrentPage: 0,
        filterPages: [
            {
                pageNumber: 0,
                startEntry: 0,
                finishEntry: 0
            }
        ],
        search: ""
    },
    addAccountAccountName: "",
    addAccountAccountTypeId: 0,
    addAccountCurrentBalance: 0,
    addAccountLowAlertBalance: 0,
    addAccountError: false,
    categoriesAndItems: [
        {
            personalBudgetCategoryId: 0,
            budgetAmount: 0,
            categoryId: 0,
            userId: 0,
            name: "",
            items: [
                {
                    personalBudgetCategoryItemId: 0,
                    personalBudgetCategoryId: 0,
                    categoryItemId: 0,
                    userId: 0,
                    name: ""
                }
            ]
        }
    ],
    dashboard: {
        budgetAmount: 0,
        categoryName: "",
        createCategoryError: false,
        createItemError: false,
        displayBudgetCard: true,
        itemName: "",
        selectedCategory: 0,
        categoryToDelete: 0,
        categoryItemToDeleteData: {
            personalBudgetCategoryId: 0,
            personalBudgetCategoryItemId: 0,
        }
    },
    individualAccounts: [
        {
            accountId: 0,
            accountName: "",
            addTransactionAmount: "",
            addTransactionAmountError: false,
            addTransactionAddError: false,
            addTransactionTransactionTypeId: 0,
            addTransactionTransactionTypeIdError: false,
            addTransactionMemoNote: "",
            addTransactionPersonalBudgetCategoryItemId: 0,
            addTransactionPersonalBudgetCategoryId: 0,
            currentBalance: 0,
            deleteAccountDisplay: false,
            deleteAccountTextValidate: "",
            lowAlertBalance: 0,
            userId: 0,
            accountTypeId: 0,
            userFirstName: "",
            entries: 3,
            filterTransactionSelection: "all",
            currentPage: 0,
            totalPages: 0,
            editAccount: false,
            editAccountName: "",
            editAccountTypeId: 0,
            editAccountLowAlertBalance: 0,
            editAccountError: false,
            editAccountErrorMessage: "",
            pages: [
                {
                    pageNumber: 0,
                    startEntry: 0,
                    finishEntry: 0,
                }
            ],
            filter: false,
            filteredTransactions: [
                {
                    transactionId: 0,
                    amount: 0,
                    date: "",
                    memoNote: "",
                    categoryName: "",
                    categoryItemName: "",
                    personalBudgetCategoryId: 0,
                    personalBudgetCategoryItemId: 0,
                    householdBudgetCategoryId: 0,
                    householdBudgetCategoryItemId: 0,
                    transactionTypeId: 0,
                    userId: 0,
                    accountId: 0,
                    edit: false,
                    editTransactionAmount: 0,
                    editTransactionTransactionTypeId: 0,
                    editTransactionMemoNote: "",
                    editTransactionPersonalBudgetCategoryId: 0,
                    editTransactionPersonalBudgetCategoryItemId: 0,
                    editTransactionDeleteDisplay: false,
                    editTransactionError: false,
                    editTransactionDeleteConfirmation: false,
                }
            ],
            filterTotalPages: 0,
            filterCurrentPage: 0,
            filterPages: [
                {
                    pageNumber: 0,
                    startEntry: 0,
                    finishEntry: 0
                }
            ],
            search: "",
            transactions: [
                {
                    transactionId: 0,
                    amount: 0,
                    date: "",
                    memoNote: "",
                    categoryName: "",
                    categoryItemName: "",
                    personalBudgetCategoryId: 0,
                    personalBudgetCategoryItemId: 0,
                    householdBudgetCategoryId: 0,
                    householdBudgetCategoryItemId: 0,
                    transactionTypeId: 0,
                    userId: 0,
                    accountId: 0,
                    edit: false,
                    editTransactionAmount: 0,
                    editTransactionTransactionTypeId: 0,
                    editTransactionMemoNote: "",
                    editTransactionPersonalBudgetCategoryId: 0,
                    editTransactionPersonalBudgetCategoryItemId: 0,
                    editTransactionDeleteDisplay: false,
                    editTransactionError: false,
                    editTransactionDeleteConfirmation: false,
                }
            ],
            transactionsMonthly: [
                {
                    transactionId: 0,
                    amount: 0,
                    date: "",
                    memoNote: "",
                    categoryName: "",
                    categoryItemName: "",
                    personalBudgetCategoryId: 0,
                    personalBudgetCategoryItemId: 0,
                    householdBudgetCategoryId: 0,
                    householdBudgetCategoryItemId: 0,
                    transactionTypeId: 0,
                    userId: 0,
                    accountId: 0
                }
            ],
            transactionsMonthlyQuantity: 0,
            depositsMonthlyQuantity: 0,
            depositsMonthlyAmount: 0,
            withdrawalsMonthlyQuantity: 0,
            withdrawalsMonthlyAmount: 0,
            transfersMonthlyQuantity: 0,
            transfersMonthlyAmount: 0
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
    navigation: {
        mobileMenu: false,
        accountSelected: false,
        editProfile: false,
        editEmail: false,
        editPassword: false
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
    picture: "",
    profile: {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        about: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    profileErrors: {
        error: false,
        errorMessage: "",
        emailError: false,
        passwordError: false,
        confirmPasswordError: false,
        passwordsMatchError: false,
        passwordConfirmationError: false,
        passwordConfirmationErrorMessage: false,
        emailConfirmationError: false,
        emailConfirmationErrorMessage: ""
    },
    route: "loading",
    routeHome: "dashboard",
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
    transactionsAllAccounts: [
        {
            transactionId: 0,
            amount: 0,
            date: "",
            memoNote: "",
            categoryName: "",
            categoryItemName: "",
            personalBudgetCategoryId: 0,
            personalBudgetCategoryItemId: 0,
            householdBudgetCategoryId: 0,
            householdBudgetCategoryItemId: 0,
            transactionTypeId: 0,
            userId: 0,
            accountId: 0,
            edit: false,
            editTransactionAmount: 0,
            editTransactionTransactionTypeId: 0,
            editTransactionMemoNote: "",
            editTransactionPersonalBudgetCategoryId: 0,
            editTransactionPersonalBudgetCategoryItemId: 0,
            editTransactionDeleteDisplay: false,
            editTransactionError: false,
            editTransactionDeleteConfirmation: false,
        }
    ],
    transactionsMonthlyAllAccounts: [
        {
            transactionId: 0,
            amount: 0,
            date: "",
            memoNote: "",
            categoryName: "",
            categoryItemName: "",
            personalBudgetCategoryId: 0,
            personalBudgetCategoryItemId: 0,
            householdBudgetCategoryId: 0,
            householdBudgetCategoryItemId: 0,
            transactionTypeId: 0,
            userId: 0,
            accountId: 0
        }
    ],
    transactionsMonthlyAllAccountsQuantity: 0,
    depositsMonthlyAllAccountsQuantity: 0,
    depositsMonthlyAllAccountsAmount: 0,
    withdrawalsMonthlyAllAccountsQuantity: 0,
    withdrawalsMonthlyAllAccountsAmount: 0,
    transfersMonthlyAllAccountsQuantity: 0,
    transfersMonthlyAllAccountsAmount: 0,
    user: {
        userId: 0,
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        about: "",
        joined: "",
        householdMemberId: 0,
        householdId: 0,
        roleId: 0,
        csrf: "",
    }

}

export const reducer = (state = initialState, action = {}) => {
    if (action.type === SET_ROUTE) {
        return {
            ...state,
            route: action.setRoutePayload
        }
    }
    if (action.type === SET_USER) {
        return {
            ...state,
            user: action.setUserPayload
        }
    }
    if (action.type === SET_LOGIN_EMAIL) {
        return {
            ...state,
            login: {
                ...state.login,
                loginEmail: action.setLoginEmailPayload

            }
        }
    }
    if (action.type === SET_LOGIN_PASSWORD) {
        return {
            ...state,
            login: {
                ...state.login,
                loginPassword: action.setLoginPasswordPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_FIRST_NAME) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpFirstName: action.setSignUpFirstNamePayload
            }
        }
    }
    if (action.type === SET_SIGNUP_LAST_NAME) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpLastName: action.setSignUpLastNamePayload
            }
        }
    }
    if (action.type === SET_SIGNUP_EMAIL) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpEmail: action.setSignUpEmailPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_PASSWORD) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpPassword: action.setSignUpPasswordPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_CONFIRM_PASSWORD) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpConfirmPassword: action.setSignUpConfirmPasswordPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpError: action.setSignUpErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_ERROR_MESSAGE) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpErrorMessage: action.setSignUpErrorMessagePayload
            }
        }
    }
    if (action.type === SET_LOGIN_ERROR) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginError: action.setLoginErrorPayload
            }
        }
    }
    if (action.type === SET_LOGIN_ERROR_MESSAGE) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginErrorMessage: action.setLoginErrorMessagePayload
            }
        }
    }
    if (action.type === SET_CSRF) {
        return {
            ...state,
            user: {
                ...state.user,
                csrf: action.setCSRFPayload
            }
        }
    }
    if (action.type === SET_ACCOUNTS) {
        return {
            ...state,
            accounts: action.setAccountsPayload
        }
    }
    if (action.type === SET_TRANSACTIONS) {
        return {
            ...state,
            transactions: action.setTransactionsPayload
        }
    }
    if (action.type === RESET_STATE) {
        return initialState;
    }
    if (action.type === SET_LOGIN_REMEMBER_ME) {
        return {
            ...state,
            login: {
                ...state.login,
                loginRememberMe: !state.login.loginRememberMe
            }
        }
    }
    if (action.type === SET_SIGNUP_REMEMBER_ME) {
        return {
            ...state,
            signUp: {
                ...state.signUp,
                signUpRememberMe: !state.signUp.signUpRememberMe
            }
        }
    }
    if (action.type === SET_LOGIN_EMAIL_ERROR) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginEmailError: action.setLoginEmailErrorPayload
            }
        }
    }
    if (action.type === SET_LOGIN_PASSWORD_ERROR) {
        return {
            ...state,
            loginErrors: {
                ...state.loginErrors,
                loginPasswordError: action.setLoginPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_FIRST_NAME_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpFirstNameError: action.setSignUpFirstNameErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_LAST_NAME_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpLastNameError: action.setSignUpLastNameErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_EMAIL_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpEmailError: action.setSignUpEmailErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_PASSWORD_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpPasswordError: action.setSignUpPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_CONFIRM_PASSWORD_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpConfirmPasswordError: action.setSignUpConfirmPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_SIGNUP_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            signUpErrors: {
                ...state.signUpErrors,
                signUpPasswordsMatchError: action.setSignUpPasswordsMatchErrorPayload
            }
        }
    }
    if (action.type === SET_FORGOT_PASSWORD_EMAIL) {
        return {
            ...state,
            forgotPassword: {
                ...state.forgotPassword,
                forgotPasswordEmail: action.setForgotPasswordEmailPayload
            }
        }
    }
    if (action.type === SET_FORGOT_PASSWORD_ERROR) {
        return {
            ...state,
            forgotPasswordErrors: {
                ...state.forgotPasswordErrors,
                forgotPasswordError: action.setForgotPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_FORGOT_PASSWORD_ERROR_MESSAGE) {
        return {
            ...state,
            forgotPasswordErrors: {
                ...state.forgotPasswordErrors,
                forgotPasswordErrorMessage: action.setForgotPasswordErrorMessagePayload
            }
        }
    }
    if (action.type === SET_FORGOT_PASSWORD_EMAIL_ERROR) {
        return {
            ...state,
            forgotPasswordErrors: {
                ...state.forgotPasswordErrors,
                forgotPasswordEmailError: action.setForgotPasswordEmailErrorPayload
            }
        }
    }

    if (action.type === SET_FORGOT_PASSWORD_EMAIL_SENT) {
        return {
            ...state,
            forgotPassword: {
                ...state.forgotPassword,
                forgotPasswordEmailSent: action.setForgotPasswordEmailSentPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_PASSWORD) {
        return {
            ...state,
            passwordReset: {
                ...state.passwordReset,
                passwordResetPassword: action.setPasswordResetPasswordPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_CONFIRM_PASSWORD) {
        return {
            ...state,
            passwordReset: {
                ...state.passwordReset,
                passwordResetConfirmPassword: action.setPasswordResetConfirmPasswordPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_TOKEN) {
        return {
            ...state,
            passwordReset: {
                ...state.passwordReset,
                passwordResetToken: action.setPasswordResetTokenPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_PASSWORD_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetPasswordError: action.setPasswordResetPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_CONFIRM_PASSWORD_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetConfirmPasswordError: action.setPasswordResetConfirmPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetPasswordsMatchError: action.setPasswordResetPasswordsMatchErrorPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetError: action.setPasswordResetErrorPayload
            }
        }
    }
    if (action.type === SET_PASSWORD_RESET_ERROR_MESSAGE) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetErrorMessage: action.setPasswordResetErrorMessagePayload
            }
        }
    }
    if (action.type === SET_MOBILE_MENU) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                mobileMenu: action.setMobileMenuPayload
            }
        }
    }
    if (action.type === TOGGLE_MOBILE_MENU) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                mobileMenu: !state.navigation.mobileMenu
            }
        }
    }
    if (action.type === SET_NAVIGATION_ACCOUNT_SELECTED) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                accountSelected: !state.navigation.accountSelected
            }
        }
    }
    if (action.type === SET_INITIAL_DATA) {

        const summaryPagesRegularOrFilter = configurePagesInReducer(state.accountSummary.entries, action.setInitialDataPayload.initialData.accountSummary);

        const formatStateForIndividualAccounts = () => {
            const formattedIndividualAccounts = [];

            action.setInitialDataPayload.initialData.individualAccounts.map(account => {

                const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, account.transactions);

                const accountObject = {
                    accountId: account.accountId,
                    accountName: account.accountName,
                    addTransactionAmount: "",
                    addTransactionAmountError: false,
                    addTransactionAddError: false,
                    addTransactionTransactionTypeId: 0,
                    addTransactionTransactionTypeIdError: false,
                    addTransactionMemoNote: "",
                    addTransactionPersonalBudgetCategoryItemId: 0,
                    addTransactionPersonalBudgetCategoryId: 0,
                    currentBalance: account.currentBalance,
                    deleteAccountDisplay: false,
                    deleteAccountTextValidate: "",
                    lowAlertBalance: account.lowAlertBalance,
                    userId: account.userId,
                    accountTypeId: account.accountTypeId,
                    userFirstName: account.userFirstName,
                    entries: individualAccountTransactionPagesRegularOrFilter.entries,
                    editAccount: false,
                    editAccountName: "",
                    editAccountTypeId: 0,
                    editAccountLowAlertBalance: 0,
                    editAccountError: false,
                    editAccountErrorMessage: "",
                    currentPage: 0,
                    totalPages: individualAccountTransactionPagesRegularOrFilter.totalPages,
                    pages: individualAccountTransactionPagesRegularOrFilter.pages,
                    search: "",
                    filter: false,
                    filterTransactionSelection: "all",
                    filterTotalPages: individualAccountTransactionPagesRegularOrFilter.totalPages,
                    filterCurrentPage: 0,
                    filterPages: individualAccountTransactionPagesRegularOrFilter.pages,
                    filteredTransactions: account.transactions,
                    transactions: account.transactions,
                    transactionsMonthly: account.transactionsMonthly,
                    transactionsMonthlyQuantity: account.transactionsMonthlyQuantity,
                    depositsMonthlyQuantity: account.depositsMonthlyQuantity,
                    depositsMonthlyAmount: account.depositsMonthlyAmount,
                    withdrawalsMonthlyQuantity: account.withdrawalsMonthlyQuantity,
                    withdrawalsMonthlyAmount: account.withdrawalsMonthlyAmount,
                    transfersMonthlyQuantity: account.transfersMonthlyQuantity,
                    transfersMonthlyAmount: account.transfersMonthlyAmount
                };
                formattedIndividualAccounts.push(accountObject);
            })
            return formattedIndividualAccounts;
        }

        return {
            ...state,
            accounts: action.setInitialDataPayload.initialData.accountSummary,
            accountSummary: {
                ...state.accountSummary,
                accounts: action.setInitialDataPayload.initialData.accountSummary,
                totalPages: summaryPagesRegularOrFilter.totalPages,
                pages: summaryPagesRegularOrFilter.pages,
                filteredAccounts: action.setInitialDataPayload.initialData.accountSummary,
                filterTotalPages: summaryPagesRegularOrFilter.totalPages,
                filterPages: summaryPagesRegularOrFilter.pages
            },
            categoriesAndItems: action.setInitialDataPayload.initialData.categoriesAndItems,
            individualAccounts: formatStateForIndividualAccounts(),
            transactionsAllAccounts: action.setInitialDataPayload.initialData.transactionsAllAccounts,
            transactionsMonthlyAllAccounts: action.setInitialDataPayload.initialData.transactionsMonthlyAllAccounts,
            transactionsMonthlyAllAccountsQuantity: action.setInitialDataPayload.initialData.transactionsMonthlyAllAccountsQuantity,
            depositsMonthlyAllAccountsQuantity: action.setInitialDataPayload.initialData.depositsMonthlyAllAccountsQuantity,
            depositsMonthlyAllAccountsAmount: action.setInitialDataPayload.initialData.depositsMonthlyAllAccountsAmount,
            withdrawalsMonthlyAllAccountsQuantity: action.setInitialDataPayload.initialData.withdrawalsMonthlyAllAccountsQuantity,
            withdrawalsMonthlyAllAccountsAmount: action.setInitialDataPayload.initialData.withdrawalsMonthlyAllAccountsAmount,
            transfersMonthlyAllAccountsQuantity: action.setInitialDataPayload.initialData.transfersMonthlyAllAccountsQuantity,
            transfersMonthlyAllAccountsAmount: action.setInitialDataPayload.initialData.transfersMonthlyAllAccountsAmount,
            user: action.setInitialDataPayload.initialData.user,
        }
    }
    if (action.type === SET_ROUTE_HOME) {
        return {
            ...state,
            routeHome: action.setRouteHomePayload
        }
    }
    if (action.type === SET_NAVIGATION_EDIT_PROFILE) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                editProfile: action.setNavigationEditProfilePayload
            }
        }
    }
    if (action.type === SET_NAVIGATION_EDIT_EMAIL) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                editEmail: action.setNavigationEditEmailPayload
            }
        }
    }
    if (action.type === SET_NAVIGATION_EDIT_PASSWORD) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                editPassword: action.setNavigationEditPasswordPayload
            }
        }
    }
    if (action.type === SET_PROFILE_FIRST_NAME) {
        return {
            ...state,
            profile: {
                ...state.profile,
                firstName: action.setProfileFirstNamePayload
            }
        }
    }
    if (action.type === SET_PROFILE_LAST_NAME) {
        return {
            ...state,
            profile: {
                ...state.profile,
                lastName: action.setProfileLastNamePayload
            }
        }
    }
    if (action.type === SET_PROFILE_ADDRESS) {
        return {
            ...state,
            profile: {
                ...state.profile,
                address: action.setProfileAddressPayload
            }
        }
    }
    if (action.type === SET_PROFILE_PHONE) {
        return {
            ...state,
            profile: {
                ...state.profile,
                phone: action.setProfilePhonePayload
            }
        }
    }
    if (action.type === SET_PROFILE_ABOUT) {
        return {
            ...state,
            profile: {
                ...state.profile,
                about: action.setProfileAboutPayload
            }
        }
    }
    if (action.type === SET_PROFILE_EMAIL) {
        return {
            ...state,
            profile: {
                ...state.profile,
                email: action.setProfileEmailPayload
            }
        }
    }
    if (action.type === SET_PROFILE_PASSWORD) {
        return {
            ...state,
            profile: {
                ...state.profile,
                password: action.setProfilePasswordPayload
            }
        }
    }
    if (action.type === SET_PROFILE_CONFIRM_PASSWORD) {
        return {
            ...state,
            profile: {
                ...state.profile,
                confirmPassword: action.setProfileConfirmPasswordPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                error: action.setProfileErrorsErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_ERROR_MESSAGE) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                errorMessage: action.setProfileErrorsErrorMessagePayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_EMAIL_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                emailError: action.setProfileErrorsEmailErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_PASSWORD_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordError: action.setProfileErrorsPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_CONFIRM_PASSWORD_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                confirmPasswordError: action.setProfileErrorsConfirmPasswordErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordsMatchError: action.setProfileErrorsPasswordsMatchErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordConfirmationError: action.setPasswordConfirmationErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR_MESSAGE) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordConfirmationErrorMessage: action.setPasswordConfirmationErrorMessagePayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                emailConfirmationError: action.setProfileErrorsEmailConfirmationErrorPayload
            }
        }
    }
    if (action.type === SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR_MESSAGE) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                emailConfirmationErrorMessage: action.setProfileErrorsEmailConfirmationErrorMessagePayload
            }
        }
    }
    if (action.type === SET_USER_PROFILE_DATA) {
        return {
            ...state,
            user: {
                ...state.user,
                firstName: action.setUserProfileDataPayload.user.firstName,
                lastName: action.setUserProfileDataPayload.user.lastName,
                address: action.setUserProfileDataPayload.user.address,
                phone: action.setUserProfileDataPayload.user.phone,
                about: action.setUserProfileDataPayload.user.about
            }
        }
    }
    if (action.type === SET_USER_PROFILE_EMAIL) {
        return {
            ...state,
            user: {
                ...state.user,
                email: action.setUserProfileEmailPayload.updatedEmail
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_ENTRIES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                entries: action.setAccountSummaryEntriesPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_TOTAL_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                totalPages: action.setAccountSummaryTotalPagesPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                pages: action.setAccountSummaryPagesPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_CURRENT_PAGE) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                currentPage: action.setAccountSummaryCurrentPagePayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_FILTER) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filter: action.setAccountSummaryFilterPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_FILTERED_ACCOUNTS) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filteredAccounts: action.setAccountSummaryFilteredAccountsPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_FILTER_TOTAL_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filterTotalPages: action.setAccountSummaryFilterTotalPagesPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_FILTER_CURRENT_PAGE) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filterCurrentPage: action.setAccountSummaryFilterCurrentPagePayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_FILTER_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filterPages: action.setAccountSummaryFilterPagesPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_ACCOUNTS) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                accounts: action.setAccountSummaryAccountsPayload
            }
        }
    }
    if (action.type === SET_ACCOUNT_SUMMARY_SEARCH) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                search: action.setAccountSummarySearchPayload
            }
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_TRANSACTION_SELECTION) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterTransactionSelectionAccountId) {
                        account.filterTransactionSelection = action.setIndividualAccountsFilterTransactionSelectionPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ENTRIES) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEntriesAccountId) {
                        account.entries = action.setIndividualAccountsEntriesPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_TOTAL_PAGES) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsTotalPagesAccountId) {
                        account.totalPages = action.setIndividualAccountsTotalPagesPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_PAGES) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsPagesAccountId) {
                        account.pages = action.setIndividualAccountsPagesPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_CURRENT_PAGE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsCurrentPageAccountId) {
                        account.currentPage = action.setIndividualAccountsCurrentPagePayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterAccountId) {
                        account.filter = action.setIndividualAccountsFilterPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTERED_TRANSACTIONS) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilteredTransactionsAccountId) {
                        account.filteredTransactions = action.setIndividualAccountsFilteredTransactionsPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_TOTAL_PAGES) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterTotalPagesAccountId) {
                        account.filterTotalPages = action.setIndividualAccountsFilterTotalPagesPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_CURRENT_PAGE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterCurrentPageAccountId) {
                        account.filterCurrentPage = action.setIndividualAccountsFilterCurrentPagePayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_PAGES) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterPagesAccountId) {
                        account.filterPages = action.setIndividualAccountsFilterPagesPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_TRANSACTIONS) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsTransactionsAccountId) {
                        account.transactions = action.setIndividualAccountsTransactionsPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_SEARCH) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsSearchAccountId) {
                        account.search = action.setIndividualAccountsSearchPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditAccountAccountId) {
                        account.editAccount = action.setIndividualAccountsEditAccountPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_NAME) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditAccountNameAccountId) {
                        account.editAccountName = action.setIndividualAccountsEditAccountNamePayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_TYPE_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditAccountTypeIdAccountId) {
                        account.editAccountTypeId = Number(action.setIndividualAccountsEditAccountTypeIdPayload)
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_LOW_ALERT_BALANCE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditAccountLowAlertBalanceAccountId) {
                        account.editAccountLowAlertBalance = Number(action.setIndividualAccountsEditAccountLowAlertBalancePayload)
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)

        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditAccountErrorAccountId) {
                        account.editAccountError = action.setIndividualAccountsEditAccountErrorPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR_MESSAGE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditAccountErrorMessageAccountId) {
                        account.editAccountErrorMessage = action.setIndividualAccountsEditAccountErrorMessagePayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_UPDATE_ACCOUNT) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                        account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                        account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                        account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts),
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                        account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                        account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                        account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                    }
                    return account;
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                            account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                            account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                            account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                            account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                            account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                            account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.filteredAccounts),
            }
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionAmountAccountId) {
                        account.addTransactionAmount = Number(action.setIndividualAccountsAddTransactionAmountPayload)
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionTransactionTypeIdAccountId) {
                        account.addTransactionTransactionTypeId = Number(action.setIndividualAccountsAddTransactionTransactionTypeIdPayload)
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_MEMO_NOTE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionMemoNoteAccountId) {
                        account.addTransactionMemoNote = action.setIndividualAccountsAddTransactionMemoNotePayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionPersonalBudgetCategoryItemIdAccountId) {
                        account.addTransactionPersonalBudgetCategoryItemId = Number(action.setIndividualAccountsAddTransactionPersonalBudgetCategoryItemIdPayload)
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionPersonalBudgetCategoryIdAccountId) {
                        account.addTransactionPersonalBudgetCategoryId = action.setIndividualAccountsAddTransactionPersonalBudgetCategoryIdPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionAmountErrorAccountId) {
                        account.addTransactionAmountError = action.setIndividualAccountsAddTransactionAmountErrorPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionPersonalBudgetErrorAccountId) {
                        account.addTransactionPersonalBudgetError = action.setIndividualAccountsAddTransactionPersonalBudgetErrorPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionTransactionTypeIdErrorAccountId) {
                        console.log(action);
                        account.addTransactionTransactionTypeIdError = action.setIndividualAccountsAddTransactionTransactionTypeIdErrorPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionAddErrorAccountId) {
                        account.addTransactionAddError = action.setIndividualAccountsAddTransactionAddErrorPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_DATA) {
        return {
            ...state,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId) {
                        account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance
                    }
                    return account;
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId) {
                            account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId) {
                            account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts)
            },
            depositsMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 2) {
                    return amountState + action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.depositsMonthlyAllAccountsAmount),
            depositsMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 2) {
                    return quantityState + 1;
                } else {
                    return quantityState;
                }
            }(state.depositsMonthlyAllAccountsQuantity),
            individualAccounts: function (individualAccountsState) {

                let individualAccounts = individualAccountsState.slice();

                individualAccounts = individualAccounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId) {

                        let transactionsSlice = account.transactions.slice();
                        transactionsSlice.push(action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction);
                        let transactionsMonthlySlice = account.transactionsMonthly.slice();
                        transactionsMonthlySlice.push(action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction);

                        const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, transactionsSlice);

                        account.addTransactionAmount = "";
                        account.addTransactionAmountError = false;
                        account.addTransactionTransactionTypeId = "";
                        account.addTransactionTransactionTypeIdError = false;
                        account.addTransactionMemoNote = "";
                        account.addTransactionPersonalBudgetCategoryItemId = 0;
                        account.addTransactionPersonalBudgetCategoryId = 0;

                        account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance;
                        account.currentPage = 0;
                        if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount += action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount;
                            account.depositsMonthlyQuantity += 1;
                        }
                        account.entries = individualAccountTransactionPagesRegularOrFilter.entries;
                        account.filter = false;
                        account.filterCurrentPage = 0;
                        account.filterPages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.filterTotalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.filterTransactionSelection = "all";
                        account.filteredTransactions = transactionsSlice;
                        account.pages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.totalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.transactions = transactionsSlice;
                        account.transactionsMonthly = transactionsMonthlySlice;
                        account.transactionsMonthlyQuantity += 1;
                        if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount += action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount;
                            account.transfersMonthlyQuantity += 1;
                        }
                        if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount += action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount;
                            account.withdrawalsMonthlyQuantity += 1;
                        }
                    }
                    return account;
                })
                return individualAccounts;
            }(state.individualAccounts),
            transactionsAllAccounts: function (transactionsAllAccountsState) {
                let transactionsAllSlice = transactionsAllAccountsState.slice();
                transactionsAllSlice.push(action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction);
                return transactionsAllSlice;
            }(state.transactionsAllAccounts),
            transactionsMonthlyAllAccounts: function (transactionsMonthlyAllAccountsState) {
                let transactionsMonthlyAllSlice = transactionsMonthlyAllAccountsState.slice();
                transactionsMonthlyAllSlice.push(action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction);
                return transactionsMonthlyAllSlice;
            }(state.transactionsMonthlyAllAccounts),
            transactionsMonthlyAllAccountsQuantity: state.transactionsMonthlyAllAccountsQuantity + 1,
            transfersMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 3) {
                    return amountState + action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.transfersMonthlyAllAccountsAmount),
            transfersMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 3) {
                    return quantityState + 1;
                } else {
                    return quantityState;
                }
            }(state.transfersMonthlyAllAccountsQuantity),
            withdrawalsMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 1) {
                    return amountState + action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.withdrawalsMonthlyAllAccountsAmount),
            withdrawalsMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 1) {
                    return quantityState + 1;
                } else {
                    return quantityState;
                }
            }(state.withdrawalsMonthlyAllAccountsQuantity),
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_CLEAR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsAddTransactionClearAccountId) {
                        account.addTransactionAmount = "";
                        account.addTransactionTransactionTypeId = "";
                        account.addTransactionMemoNote = "";
                        account.addTransactionPersonalBudgetCategoryId = 0;
                        account.addTransactionPersonalBudgetCategoryItemId = 0;
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionTransactionId) {
                                transaction.edit = action.setIndividualAccountsEditTransactionPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionTransactionId) {
                                transaction.edit = action.setIndividualAccountsEditTransactionPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_AMOUNT) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionAmountAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionAmountTransactionId) {
                                transaction.editTransactionAmount = Number(action.setIndividualAccountsEditTransactionAmountPayload)
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionAmountTransactionId) {
                                transaction.editTransactionAmount = Number(action.setIndividualAccountsEditTransactionAmountPayload)
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_TRANSACTION_TYPE_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionTransactionTypeIdAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionTransactionTypeIdTransactionId) {
                                transaction.editTransactionTransactionTypeId = Number(action.setIndividualAccountsEditTransactionTransactionTypeIdPayload);
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionTransactionTypeIdTransactionId) {
                                transaction.editTransactionTransactionTypeId = Number(action.setIndividualAccountsEditTransactionTransactionTypeIdPayload)
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_MEMO_NOTE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionMemoNoteAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionMemoNoteTransactionId) {
                                transaction.editTransactionMemoNote = action.setIndividualAccountsEditTransactionMemoNotePayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionMemoNoteTransactionId) {
                                transaction.editTransactionMemoNote = action.setIndividualAccountsEditTransactionMemoNotePayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionPersonalBudgetCategoryIdAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionPersonalBudgetCategoryIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryId = action.setIndividualAccountsEditTransactionPersonalBudgetCategoryIdPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionPersonalBudgetCategoryIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryId = action.setIndividualAccountsEditTransactionPersonalBudgetCategoryIdPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryItemId = action.setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryItemId = action.setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_CANCEL) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionCancelAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionCancelTransactionId) {
                                transaction.edit = false;
                                transaction.editTransactionAmount = 0;
                                transaction.editTransactionTransactionTypeId = 0;
                                transaction.editTransactionMemoNote = "";
                                transaction.editTransactionPersonalBudgetCategoryId = 0;
                                transaction.editTransactionPersonalBudgetCategoryItemId = 0;
                                transaction.editTransactionDeleteDisplay = false;
                                transaction.editTransactionDeleteConfirmation = false;
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionCancelTransactionId) {
                                transaction.edit = false;
                                transaction.editTransactionAmount = 0;
                                transaction.editTransactionTransactionTypeId = 0;
                                transaction.editTransactionMemoNote = "";
                                transaction.editTransactionPersonalBudgetCategoryId = 0;
                                transaction.editTransactionPersonalBudgetCategoryItemId = 0;
                                transaction.editTransactionDeleteDisplay = false;
                                transaction.editTransactionDeleteConfirmation = false;
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DELETE_DISPLAY) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionDeleteDisplayAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionDeleteDisplayTransactionId) {
                                transaction.editTransactionDeleteDisplay = action.setIndividualAccountsEditTransactionDeleteDisplayPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionDeleteDisplayTransactionId) {
                                transaction.editTransactionDeleteDisplay = action.setIndividualAccountsEditTransactionDeleteDisplayPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionErrorAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionErrorTransactionId) {
                                transaction.editTransactionError = action.setIndividualAccountsEditTransactionErrorPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionErrorTransactionId) {
                                transaction.editTransactionError = action.setIndividualAccountsEditTransactionErrorPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DATA) {
        const oldTransaction = JSON.parse(JSON.stringify(action.setIndividualAccountsEditTransactionDataTransaction));
        return {
            ...state,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionDataAccount.accountId) {
                        account.currentBalance = action.setIndividualAccountsEditTransactionDataPayload.configuredAccount.currentBalance
                    }
                    return account;
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsEditTransactionDataAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsEditTransactionDataPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsEditTransactionDataAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsEditTransactionDataPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts)
            },
            depositsMonthlyAllAccountsAmount: function (state) {

                //new type is not deposit and old type was deposit, subtract old amount
                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsAmount - oldTransaction.amount;
                }

                // if new type is same as old, and old type was 2, still subtract old amount but then add updated amount
                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsAmount - oldTransaction.amount + action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                }

                return state.depositsMonthlyAllAccountsAmount;

            }(state),
            depositsMonthlyAllAccountsQuantity: function (state) {

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsQuantity - 1;
                }

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsQuantity;
                }

                return state.depositsMonthlyAllAccountsQuantity;
            }(state),
            individualAccounts: function (individualAccountsState) {
                let individualAccounts = individualAccountsState.slice();

                individualAccounts = individualAccounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionDataAccount.accountId) {

                        const transactionsSlice = account.transactions.slice();

                        const updatedTransactions = transactionsSlice.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionDataTransaction.transactionId) {
                                transaction.amount = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                                transaction.transactionTypeId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                                transaction.memoNote = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.memoNote;
                                transaction.personalBudgetCategoryId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                                transaction.personalBudgetCategoryItemId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                            }
                            return transaction;
                        })
                        //console.log("updated transactions", updatedTransactions)
                        const transactionsMonthlySlice = account.transactionsMonthly.slice();

                        const updatedMonthlyTransactions = transactionsMonthlySlice.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsEditTransactionDataTransaction.transactionId) {
                                transaction.amount = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                                transaction.transactionTypeId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                                transaction.memoNote = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.memoNote;
                                transaction.personalBudgetCategoryId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                                transaction.personalBudgetCategoryItemId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                            }
                            return transaction;
                        })

                        const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, updatedTransactions);


                        account.currentBalance = action.setIndividualAccountsEditTransactionDataPayload.configuredAccount.currentBalance;
                        account.currentPage = 0;

                        if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 2 && oldTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount = account.depositsMonthlyAmount - oldTransaction.amount;
                            account.depositsMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 2 && oldTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount = account.depositsMonthlyAmount - oldTransaction.amount + action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                        }

                        account.entries = individualAccountTransactionPagesRegularOrFilter.entries;
                        account.filter = false;
                        account.filterCurrentPage = 0;
                        account.filterPages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.filterTotalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.filterTransactionSelection = "all";
                        account.filteredTransactions = updatedTransactions;
                        account.pages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.totalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.transactions = updatedTransactions;
                        account.transactionsMonthly = updatedMonthlyTransactions;

                        if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 3 && oldTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount = account.transfersMonthlyAmount - oldTransaction.amount;
                            account.transfersMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 3 && oldTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount = account.transfersMonthlyAmount - oldTransaction.amount + action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                        }


                        if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 1 && oldTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount = account.withdrawalsMonthlyAmount - oldTransaction.amount;
                            account.withdrawalsMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 1 && oldTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount = account.withdrawalsMonthlyAmount - oldTransaction.amount + action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                        }

                    }
                    return account;
                })
                return individualAccounts;
            }(state.individualAccounts),
            transactionsAllAccounts: function (transactionsAllAccountsState) {
                let transactionsAllSlice = transactionsAllAccountsState.slice();
                transactionsAllSlice = transactionsAllSlice.map(transaction => {
                    if (transaction.transactionId === action.setIndividualAccountsEditTransactionDataTransaction.transactionId) {
                        transaction.amount = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                        transaction.transactionTypeId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                        transaction.memoNote = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.memoNote;
                        transaction.personalBudgetCategoryId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                        transaction.personalBudgetCategoryItemId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                    }
                    return transaction;
                })
                return transactionsAllSlice;
            }(state.transactionsAllAccounts),
            transactionsMonthlyAllAccounts: function (transactionsMonthlyAllAccountsState) {
                let transactionsMonthlyAllSlice = transactionsMonthlyAllAccountsState.slice();
                transactionsMonthlyAllSlice = transactionsMonthlyAllSlice.map(transaction => {
                    if (transaction.transactionId === action.setIndividualAccountsEditTransactionDataTransaction.transactionId) {
                        transaction.amount = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                        transaction.transactionTypeId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                        transaction.memoNote = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.memoNote;
                        transaction.personalBudgetCategoryId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                        transaction.personalBudgetCategoryItemId = action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                    }
                    return transaction;
                })
                return transactionsMonthlyAllSlice;
            }(state.transactionsMonthlyAllAccounts),
            transfersMonthlyAllAccountsAmount: function (state) {

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsAmount - oldTransaction.amount;
                }
                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsAmount - oldTransaction.amount + action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                }

                return state.transfersMonthlyAllAccountsAmount;

            }(state),
            transfersMonthlyAllAccountsQuantity: function (state) {

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsQuantity - 1;
                }
                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsQuantity;
                }

                return state.transfersMonthlyAllAccountsQuantity;

            }(state),
            withdrawalsMonthlyAllAccountsAmount: function (state) {

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 1 && oldTransaction.transactionTypeId === 1) {
                    return state.withdrawalsMonthlyAllAccountsAmount - oldTransaction.amount;
                }
                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 1 && oldTransaction.transactionTypeId === 1) {
                    console.log("state amount,- old transaction amount , + action amount, ", state.withdrawalsMonthlyAllAccountsAmount, oldTransaction.amount, action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount)
                    return state.withdrawalsMonthlyAllAccountsAmount - oldTransaction.amount + action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.amount;
                }
                return state.withdrawalsMonthlyAllAccountsAmount;
            }(state),
            withdrawalsMonthlyAllAccountsQuantity: function (state) {

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 1 && oldTransaction.transactionTypeId === 1) {
                    return state.withdrawalsMonthlyAllAccountsQuantity - 1;
                }

                if (action.setIndividualAccountsEditTransactionDataPayload.configuredTransaction.transactionTypeId === 1 && oldTransaction.transactionTypeId === 1) {
                    return state.withdrawalsMonthlyAllAccountsQuantity;
                }
                return state.withdrawalsMonthlyAllAccountsQuantity;
            }(state),
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DELETE_CONFIRMATION) {
        return {
            ...state,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionDeleteConfirmationAccount.accountId) {
                        account.currentBalance = action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance
                    }
                    return account;
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsEditTransactionDeleteConfirmationAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsEditTransactionDeleteConfirmationAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts)
            },
            depositsMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 2) {
                    return amountState - action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.depositsMonthlyAllAccountsAmount),
            depositsMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 2) {
                    return quantityState - 1;
                } else {
                    return quantityState;
                }
            }(state.depositsMonthlyAllAccountsQuantity),
            individualAccounts: function (individualAccountsState) {
                let individualAccounts = individualAccountsState.slice();

                individualAccounts = individualAccounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsEditTransactionDeleteConfirmationAccount.accountId) {

                        let transactionsSlice = account.transactions.slice();
                        transactionsSlice = transactionsSlice.filter(transaction => {
                            console.log(action.setIndividualAccountsEditTransactionDeleteConfirmationTransaction)
                            console.log(transaction.transactionId)
                            return (transaction.transactionId !== action.setIndividualAccountsEditTransactionDeleteConfirmationTransaction.transactionId)
                        })
                        console.log("transactionSlice in delete confirmation", transactionsSlice)

                        let transactionsMonthlySlice = account.transactionsMonthly.slice();
                        transactionsMonthlySlice = transactionsMonthlySlice.filter(transaction => {
                            return (transaction.transactionId !== action.setIndividualAccountsEditTransactionDeleteConfirmationTransaction.transactionId)
                        })

                        const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, transactionsSlice);


                        account.currentBalance = action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance;
                        account.currentPage = 0;
                        if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount -= action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.amount;
                            account.depositsMonthlyQuantity -= 1;
                        }
                        account.entries = individualAccountTransactionPagesRegularOrFilter.entries;
                        account.filter = false;
                        account.filterCurrentPage = 0;
                        account.filterPages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.filterTotalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.filterTransactionSelection = "all";
                        account.filteredTransactions = transactionsSlice;
                        account.pages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.totalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.transactions = transactionsSlice;
                        account.transactionsMonthly = transactionsMonthlySlice;
                        account.transactionsMonthlyQuantity -= 1;
                        if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount -= action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.amount;
                            account.transfersMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount -= action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.amount;
                            account.withdrawalsMonthlyQuantity -= 1;
                        }
                    }
                    return account;
                })
                return individualAccounts;
            }(state.individualAccounts),
            transactionsAllAccounts: function (transactionsAllAccountsState) {
                let transactionsAllSlice = transactionsAllAccountsState.slice();
                transactionsAllSlice = transactionsAllSlice.filter(transaction => {
                    return (transaction.transactionId !== action.setIndividualAccountsEditTransactionDeleteConfirmationTransaction.transactionId)
                });
                return transactionsAllSlice;
            }(state.transactionsAllAccounts),
            transactionsMonthlyAllAccounts: function (transactionsMonthlyAllAccountsState) {
                let transactionsMonthlyAllSlice = transactionsMonthlyAllAccountsState.slice();
                transactionsMonthlyAllSlice = transactionsMonthlyAllSlice.filter(transaction => {
                    return (transaction.transactionId !== action.setIndividualAccountsEditTransactionDeleteConfirmationTransaction.transactionId)
                });
                return transactionsMonthlyAllSlice;
            }(state.transactionsMonthlyAllAccounts),
            transactionsMonthlyAllAccountsQuantity: state.transactionsMonthlyAllAccountsQuantity - 1,
            transfersMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 3) {
                    return amountState - action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.transfersMonthlyAllAccountsAmount),
            transfersMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 3) {
                    return quantityState - 1;
                } else {
                    return quantityState;
                }
            }(state.transfersMonthlyAllAccountsQuantity),
            withdrawalsMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 1) {
                    return amountState - action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.withdrawalsMonthlyAllAccountsAmount),
            withdrawalsMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 1) {
                    return quantityState - 1;
                } else {
                    return quantityState;
                }
            }(state.withdrawalsMonthlyAllAccountsQuantity),
        }
    }
    //
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionTransactionId) {
                                transaction.edit = action.setIndividualAccountsFilterEditTransactionPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionTransactionId) {
                                transaction.edit = action.setIndividualAccountsFilterEditTransactionPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_AMOUNT) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionAmountAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionAmountTransactionId) {
                                transaction.editTransactionAmount = Number(action.setIndividualAccountsFilterEditTransactionAmountPayload)
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionAmountTransactionId) {
                                transaction.editTransactionAmount = Number(action.setIndividualAccountsFilterEditTransactionAmountPayload)
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_TRANSACTION_TYPE_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionTransactionTypeIdAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionTransactionTypeIdTransactionId) {
                                transaction.editTransactionTransactionTypeId = Number(action.setIndividualAccountsFilterEditTransactionTransactionTypeIdPayload);
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionTransactionTypeIdTransactionId) {
                                transaction.editTransactionTransactionTypeId = Number(action.setIndividualAccountsFilterEditTransactionTransactionTypeIdPayload)
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_MEMO_NOTE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionMemoNoteAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionMemoNoteTransactionId) {
                                transaction.editTransactionMemoNote = action.setIndividualAccountsFilterEditTransactionMemoNotePayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionMemoNoteTransactionId) {
                                transaction.editTransactionMemoNote = action.setIndividualAccountsFilterEditTransactionMemoNotePayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryId = action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryId = action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryItemId = action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdTransactionId) {
                                transaction.editTransactionPersonalBudgetCategoryItemId = action.setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_CANCEL) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionCancelAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionCancelTransactionId) {
                                transaction.edit = false;
                                transaction.editTransactionAmount = 0;
                                transaction.editTransactionTransactionTypeId = 0;
                                transaction.editTransactionMemoNote = "";
                                transaction.editTransactionPersonalBudgetCategoryId = 0;
                                transaction.editTransactionPersonalBudgetCategoryItemId = 0;
                                transaction.editTransactionDeleteDisplay = false;
                                transaction.editTransactionDeleteConfirmation = false;
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionCancelTransactionId) {
                                transaction.edit = false;
                                transaction.editTransactionAmount = 0;
                                transaction.editTransactionTransactionTypeId = 0;
                                transaction.editTransactionMemoNote = "";
                                transaction.editTransactionPersonalBudgetCategoryId = 0;
                                transaction.editTransactionPersonalBudgetCategoryItemId = 0;
                                transaction.editTransactionDeleteDisplay = false;
                                transaction.editTransactionDeleteConfirmation = false;
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DELETE_DISPLAY) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionDeleteDisplayAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionDeleteDisplayTransactionId) {
                                transaction.editTransactionDeleteDisplay = action.setIndividualAccountsFilterEditTransactionDeleteDisplayPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionDeleteDisplayTransactionId) {
                                transaction.editTransactionDeleteDisplay = action.setIndividualAccountsFilterEditTransactionDeleteDisplayPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_ERROR) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionErrorAccountId) {

                        account.transactions = account.transactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionErrorTransactionId) {
                                transaction.editTransactionError = action.setIndividualAccountsFilterEditTransactionErrorPayload
                            }
                            return transaction;
                        })
                        account.filteredTransactions = account.filteredTransactions.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionErrorTransactionId) {
                                transaction.editTransactionError = action.setIndividualAccountsFilterEditTransactionErrorPayload
                            }
                            return transaction;
                        })
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DATA) {
        const oldTransaction = JSON.parse(JSON.stringify(action.setIndividualAccountsFilterEditTransactionDataTransaction));
        return {
            ...state,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionDataAccount.accountId) {
                        account.currentBalance = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredAccount.currentBalance
                    }
                    return account;
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsFilterEditTransactionDataAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsFilterEditTransactionDataAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts)
            },
            depositsMonthlyAllAccountsAmount: function (state) {

                //new type is not deposit and old type was deposit, subtract old amount
                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsAmount - oldTransaction.amount;
                }

                // if new type is same as old, and old type was 2, still subtract old amount but then add updated amount
                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsAmount - oldTransaction.amount + action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                }

                return state.depositsMonthlyAllAccountsAmount;

            }(state),
            depositsMonthlyAllAccountsQuantity: function (state) {

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsQuantity - 1;
                }

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 2 && oldTransaction.transactionTypeId === 2) {
                    return state.depositsMonthlyAllAccountsQuantity;
                }

                return state.depositsMonthlyAllAccountsQuantity;
            }(state),
            individualAccounts: function (individualAccountsState) {
                let individualAccounts = individualAccountsState.slice();

                individualAccounts = individualAccounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionDataAccount.accountId) {

                        const transactionsSlice = account.transactions.slice();

                        const updatedTransactions = transactionsSlice.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionDataTransaction.transactionId) {
                                transaction.amount = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                                transaction.transactionTypeId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                                transaction.memoNote = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.memoNote;
                                transaction.personalBudgetCategoryId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                                transaction.personalBudgetCategoryItemId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                            }
                            return transaction;
                        })
                        //console.log("updated transactions", updatedTransactions)
                        const transactionsMonthlySlice = account.transactionsMonthly.slice();

                        const updatedMonthlyTransactions = transactionsMonthlySlice.map(transaction => {
                            if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionDataTransaction.transactionId) {
                                transaction.amount = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                                transaction.transactionTypeId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                                transaction.memoNote = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.memoNote;
                                transaction.personalBudgetCategoryId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                                transaction.personalBudgetCategoryItemId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                            }
                            return transaction;
                        })

                        const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, updatedTransactions);


                        account.currentBalance = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredAccount.currentBalance;
                        account.currentPage = 0;

                        if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 2 && oldTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount = account.depositsMonthlyAmount - oldTransaction.amount;
                            account.depositsMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 2 && oldTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount = account.depositsMonthlyAmount - oldTransaction.amount + action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                        }

                        account.entries = individualAccountTransactionPagesRegularOrFilter.entries;
                        account.filter = false;
                        account.filterCurrentPage = 0;
                        account.filterPages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.filterTotalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.filterTransactionSelection = "all";
                        account.filteredTransactions = updatedTransactions;
                        account.pages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.totalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.transactions = updatedTransactions;
                        account.transactionsMonthly = updatedMonthlyTransactions;

                        if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 3 && oldTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount = account.transfersMonthlyAmount - oldTransaction.amount;
                            account.transfersMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 3 && oldTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount = account.transfersMonthlyAmount - oldTransaction.amount + action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                        }


                        if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 1 && oldTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount = account.withdrawalsMonthlyAmount - oldTransaction.amount;
                            account.withdrawalsMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 1 && oldTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount = account.withdrawalsMonthlyAmount - oldTransaction.amount + action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                        }

                    }
                    return account;
                })
                return individualAccounts;
            }(state.individualAccounts),
            transactionsAllAccounts: function (transactionsAllAccountsState) {
                let transactionsAllSlice = transactionsAllAccountsState.slice();
                transactionsAllSlice = transactionsAllSlice.map(transaction => {
                    if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionDataTransaction.transactionId) {
                        transaction.amount = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                        transaction.transactionTypeId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                        transaction.memoNote = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.memoNote;
                        transaction.personalBudgetCategoryId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                        transaction.personalBudgetCategoryItemId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                    }
                    return transaction;
                })
                return transactionsAllSlice;
            }(state.transactionsAllAccounts),
            transactionsMonthlyAllAccounts: function (transactionsMonthlyAllAccountsState) {
                let transactionsMonthlyAllSlice = transactionsMonthlyAllAccountsState.slice();
                transactionsMonthlyAllSlice = transactionsMonthlyAllSlice.map(transaction => {
                    if (transaction.transactionId === action.setIndividualAccountsFilterEditTransactionDataTransaction.transactionId) {
                        transaction.amount = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                        transaction.transactionTypeId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId;
                        transaction.memoNote = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.memoNote;
                        transaction.personalBudgetCategoryId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryId;
                        transaction.personalBudgetCategoryItemId = action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.personalBudgetCategoryItemId;
                    }
                    return transaction;
                })
                return transactionsMonthlyAllSlice;
            }(state.transactionsMonthlyAllAccounts),
            transfersMonthlyAllAccountsAmount: function (state) {

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsAmount - oldTransaction.amount;
                }
                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsAmount - oldTransaction.amount + action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                }

                return state.transfersMonthlyAllAccountsAmount;

            }(state),
            transfersMonthlyAllAccountsQuantity: function (state) {

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsQuantity - 1;
                }
                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 3 && oldTransaction.transactionTypeId === 3) {
                    return state.transfersMonthlyAllAccountsQuantity;
                }

                return state.transfersMonthlyAllAccountsQuantity;

            }(state),
            withdrawalsMonthlyAllAccountsAmount: function (state) {

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 1 && oldTransaction.transactionTypeId === 1) {
                    return state.withdrawalsMonthlyAllAccountsAmount - oldTransaction.amount;
                }
                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 1 && oldTransaction.transactionTypeId === 1) {
                    console.log("state amount,- old transaction amount , + action amount, ", state.withdrawalsMonthlyAllAccountsAmount, oldTransaction.amount, action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount)
                    return state.withdrawalsMonthlyAllAccountsAmount - oldTransaction.amount + action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.amount;
                }
                return state.withdrawalsMonthlyAllAccountsAmount;
            }(state),
            withdrawalsMonthlyAllAccountsQuantity: function (state) {

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId !== 1 && oldTransaction.transactionTypeId === 1) {
                    return state.withdrawalsMonthlyAllAccountsQuantity - 1;
                }

                if (action.setIndividualAccountsFilterEditTransactionDataPayload.configuredTransaction.transactionTypeId === 1 && oldTransaction.transactionTypeId === 1) {
                    return state.withdrawalsMonthlyAllAccountsQuantity;
                }
                return state.withdrawalsMonthlyAllAccountsQuantity;
            }(state),
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DELETE_CONFIRMATION) {
        return {
            ...state,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionDeleteConfirmationAccount.accountId) {
                        account.currentBalance = action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance
                    }
                    return account;
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsFilterEditTransactionDeleteConfirmationAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.map(account => {
                        if (account.accountId === action.setIndividualAccountsFilterEditTransactionDeleteConfirmationAccount.accountId) {
                            account.currentBalance = action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance
                        }
                        return account;
                    })
                    return accounts;
                }(state.accountSummary.accounts)
            },
            depositsMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 2) {
                    return amountState - action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.depositsMonthlyAllAccountsAmount),
            depositsMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 2) {
                    return quantityState - 1;
                } else {
                    return quantityState;
                }
            }(state.depositsMonthlyAllAccountsQuantity),
            individualAccounts: function (individualAccountsState) {
                let individualAccounts = individualAccountsState.slice();

                individualAccounts = individualAccounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsFilterEditTransactionDeleteConfirmationAccount.accountId) {

                        let transactionsSlice = account.transactions.slice();
                        transactionsSlice = transactionsSlice.filter(transaction => {
                            return (transaction.transactionId !== action.setIndividualAccountsFilterEditTransactionDeleteConfirmationTransaction.transactionId)
                        })

                        let transactionsMonthlySlice = account.transactionsMonthly.slice();
                        transactionsMonthlySlice = transactionsMonthlySlice.filter(transaction => {
                            return (transaction.transactionId !== action.setIndividualAccountsFilterEditTransactionDeleteConfirmationTransaction.transactionId)
                        })

                        const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, transactionsSlice);


                        account.currentBalance = action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredAccount.currentBalance;
                        account.currentPage = 0;
                        if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 2) {
                            account.depositsMonthlyAmount -= action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.amount;
                            account.depositsMonthlyQuantity -= 1;
                        }
                        account.entries = individualAccountTransactionPagesRegularOrFilter.entries;
                        account.filter = false;
                        account.filterCurrentPage = 0;
                        account.filterPages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.filterTotalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.filterTransactionSelection = "all";
                        account.filteredTransactions = transactionsSlice;
                        account.pages = individualAccountTransactionPagesRegularOrFilter.pages;
                        account.totalPages = individualAccountTransactionPagesRegularOrFilter.totalPages;
                        account.transactions = transactionsSlice;
                        account.transactionsMonthly = transactionsMonthlySlice;
                        account.transactionsMonthlyQuantity -= 1;
                        if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 3) {
                            account.transfersMonthlyAmount -= action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.amount;
                            account.transfersMonthlyQuantity -= 1;
                        }
                        if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 1) {
                            account.withdrawalsMonthlyAmount -= action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.amount;
                            account.withdrawalsMonthlyQuantity -= 1;
                        }
                    }
                    return account;
                })
                return individualAccounts;
            }(state.individualAccounts),
            transactionsAllAccounts: function (transactionsAllAccountsState) {
                let transactionsAllSlice = transactionsAllAccountsState.slice();
                transactionsAllSlice = transactionsAllSlice.filter(transaction => {
                    return (transaction.transactionId !== action.setIndividualAccountsFilterEditTransactionDeleteConfirmationTransaction.transactionId)
                });
                return transactionsAllSlice;
            }(state.transactionsAllAccounts),
            transactionsMonthlyAllAccounts: function (transactionsMonthlyAllAccountsState) {
                let transactionsMonthlyAllSlice = transactionsMonthlyAllAccountsState.slice();
                transactionsMonthlyAllSlice = transactionsMonthlyAllSlice.filter(transaction => {
                    return (transaction.transactionId !== action.setIndividualAccountsFilterEditTransactionDeleteConfirmationTransaction.transactionId)
                });
                return transactionsMonthlyAllSlice;
            }(state.transactionsMonthlyAllAccounts),
            transactionsMonthlyAllAccountsQuantity: state.transactionsMonthlyAllAccountsQuantity - 1,
            transfersMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 3) {
                    return amountState - action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.transfersMonthlyAllAccountsAmount),
            transfersMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 3) {
                    return quantityState - 1;
                } else {
                    return quantityState;
                }
            }(state.transfersMonthlyAllAccountsQuantity),
            withdrawalsMonthlyAllAccountsAmount: function (amountState) {
                if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 1) {
                    return amountState - action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.amount
                } else {
                    return amountState;
                }
            }(state.withdrawalsMonthlyAllAccountsAmount),
            withdrawalsMonthlyAllAccountsQuantity: function (quantityState) {
                if (action.setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload.configuredTransaction.transactionTypeId === 1) {
                    return quantityState - 1;
                } else {
                    return quantityState;
                }
            }(state.withdrawalsMonthlyAllAccountsQuantity),
        }
    }
    //here... add deletestate to all applicable reducers, backend responses, , do just for delete first and same for addAccount... account name, balance, account type, low alert balance, owner
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_DISPLAY) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsDeleteAccountDisplayAccountId) {
                        account.deleteAccountDisplay = action.setIndividualAccountsDeleteAccountDisplayPayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_TEXT_VALIDATE) {
        return {
            ...state,
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.map(account => {
                    if (account.accountId === action.setIndividualAccountsDeleteAccountTextValidateAccountId) {
                        account.deleteAccountTextValidate = action.setIndividualAccountsDeleteAccountTextValidatePayload
                    }
                    return account;
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_CONFIRMATION) {


        let accountsArray = state.accounts.filter(account => {
            return (account.accountId !== action.setIndividualAccountsDeleteAccountConfirmationAccountId);
        })

        const summaryPagesRegularOrFilter = configurePagesInReducer(state.accountSummary.entries, accountsArray);

        return {
            ...state,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.filter(account => {
                    return (account.accountId !== action.setIndividualAccountsDeleteAccountConfirmationAccountId);
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.filter(account => {
                        return (account.accountId !== action.setIndividualAccountsDeleteAccountConfirmationAccountId);
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                currentPage: 0,
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts = accounts.filter(account => {
                        return (account.accountId !== action.setIndividualAccountsDeleteAccountConfirmationAccountId);
                    })
                    return accounts;
                }(state.accountSummary.filteredAccounts),
                filterTotalPages: summaryPagesRegularOrFilter.totalPages,
                filterPages: summaryPagesRegularOrFilter.pages,
                filter: false,
                pages: summaryPagesRegularOrFilter.pages,
                search: "",
                totalPages: summaryPagesRegularOrFilter.totalPages
            },
            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts = accounts.filter(account => {
                    return (account.accountId !== action.setIndividualAccountsDeleteAccountConfirmationAccountId);
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if (action.type === SET_ADD_ACCOUNT_ACCOUNT_NAME) {
        return {
            ...state,
            addAccountAccountName: action.setAddAccountAccountNamePayload
        }
    }
    if (action.type === SET_ADD_ACCOUNT_ACCOUNT_TYPE_ID) {
        return {
            ...state,
            addAccountAccountTypeId: Number(action.setAddAccountAccountTypeIdPayload)
        }
    }
    if (action.type === SET_ADD_ACCOUNT_CURRENT_BALANCE) {
        return {
            ...state,
            addAccountCurrentBalance: Number(action.setAddAccountCurrentBalancePayload)
        }
    }
    if (action.type === SET_ADD_ACCOUNT_LOW_ALERT_BALANCE) {
        return {
            ...state,
            addAccountLowAlertBalance: Number(action.setAddAccountLowAlertBalancePayload)
        }
    }
    if (action.type === SET_ADD_ACCOUNT_ERROR) {
        return {
            ...state,
            addAccountError: action.setAddAccountErrorPayload
        }
    }
    if (action.type === SET_ADD_ACCOUNT_CONFIRMATION) {

        const accountObject = {
            accountId: action.setAddAccountConfirmationPayload.accountId,
            accountName: action.setAddAccountConfirmationPayload.accountName,
            accountTypeId: action.setAddAccountConfirmationPayload.accountTypeId,
            currentBalance: action.setAddAccountConfirmationPayload.currentBalance,
            lowAlertBalance: action.setAddAccountConfirmationPayload.lowAlertBalance,
            userId: action.setAddAccountConfirmationPayload.userId
        }

        const accountsArray = state.accounts.slice();
        accountsArray.push(accountObject);

        const summaryPagesRegularOrFilter = configurePagesInReducer(state.accountSummary.entries, accountsArray);

        return {
            ...state,
            addAccountAccountName: "",
            addAccountAccountTypeId: 0,
            addAccountCurrentBalance: 0,
            addAccountLowAlertBalance: 0,
            accounts: function (accountsState) {
                let accounts = accountsState.slice();
                accounts.push(accountObject);
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts.push(accountObject);
                    return accounts;
                }(state.accountSummary.accounts),
                currentPage: 0,
                filteredAccounts: function (accountsState) {
                    let accounts = accountsState.slice();
                    accounts.push(accountObject);
                    return accounts;
                }(state.accountSummary.accounts),
                filterTotalPages: summaryPagesRegularOrFilter.totalPages,
                filterPages: summaryPagesRegularOrFilter.pages,
                filter: false,
                pages: summaryPagesRegularOrFilter.pages,
                search: "",
                totalPages: summaryPagesRegularOrFilter.totalPages
            },

            individualAccounts: function (accountsState) {
                let accounts = accountsState.slice();
                let individualAccount = {
                    accountId: accountObject.accountId,
                    accountName: accountObject.accountName,
                    addTransactionAmount: "",
                    addTransactionAmountError: false,
                    addTransactionAddError: false,
                    addTransactionTransactionTypeId: 0,
                    addTransactionTransactionTypeIdError: false,
                    addTransactionMemoNote: "",
                    addTransactionPersonalBudgetCategoryItemId: 0,
                    addTransactionPersonalBudgetCategoryId: 0,
                    currentBalance: accountObject.currentBalance,
                    deleteAccountDisplay: false,
                    deleteAccountTextValidate: "",
                    lowAlertBalance: accountObject.lowAlertBalance,
                    userId: accountObject.userId,
                    accountTypeId: accountObject.accountTypeId,
                    userFirstName: state.user.firstName,
                    entries: 3,
                    filterTransactionSelection: "all",
                    currentPage: 0,
                    totalPages: 0,
                    editAccount: false,
                    editAccountName: "",
                    editAccountTypeId: 0,
                    editAccountLowAlertBalance: 0,
                    editAccountError: false,
                    editAccountErrorMessage: "",
                    pages: [
                        {
                            pageNumber: 0,
                            startEntry: 0,
                            finishEntry: 0,
                        }
                    ],
                    filter: false,
                    filteredTransactions: [],
                    filterTotalPages: 0,
                    filterCurrentPage: 0,
                    filterPages: [
                        {
                            pageNumber: 0,
                            startEntry: 0,
                            finishEntry: 0,
                        }
                    ],
                    search: "",
                    transactions: [],
                    transactionsMonthly: [],
                    transactionsMonthlyQuantity: 0,
                    depositsMonthlyQuantity: 0,
                    depositsMonthlyAmount: 0,
                    withdrawalsMonthlyQuantity: 0,
                    withdrawalsMonthlyAmount: 0,
                    transfersMonthlyQuantity: 0,
                    transfersMonthlyAmount: 0
                }

                accounts.push(individualAccount);
                return accounts;
            }(state.individualAccounts),
        }
    }
    if (action.type === SET_DASHBOARD_DISPLAY_BUDGET_CARD) {
        const value = function convertPayload() {
            if (action.setDashboardDisplayBudgetCardPayload === "toggle") {
                return !state.dashboardDisplayBudgetCard
            }
            if (action.setDashboardDisplayBudgetCardPayload === "false") {
                return false;
            }
        }();
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                displayBudgetCard: value
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CATEGORY_NAME) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                categoryName: action.setDashboardBudgetCardCategoryNamePayload.toLowerCase()
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_BUDGET_AMOUNT) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                budgetAmount: Number(action.setDashboardBudgetCardBudgetAmountPayload)
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CREATE_CATEGORY_ERROR) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                createCategoryError: action.setDashboardBudgetCardCreateCategoryErrorPayload
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_SELECTED_CATEGORY) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                selectedCategory: action.setDashboardBudgetCardSelectedCategoryPayload
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_ITEM_NAME) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                itemName: action.setDashboardBudgetCardItemNamePayload.toLowerCase()
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CREATE_ITEM_ERROR) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                createItemError: action.setDashboardBudgetCardCreateItemErrorPayload
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CREATE_CATEGORY_DATA) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                budgetAmount: 0,
                categoryName: "",
                createCategoryError: false,
                createItemError: false
            },
            categoriesAndItems: function (categoriesAndItemsState) {
                const categoriesAndItems = categoriesAndItemsState.slice();
                const categoryObject = {
                    personalBudgetCategoryId: action.setDashboardBudgetCardCreateCategoryDataPayload.personalBudgetCategoryId,
                    budgetAmount: action.setDashboardBudgetCardCreateCategoryDataPayload.budgetAmount,
                    categoryId: action.setDashboardBudgetCardCreateCategoryDataPayload.categoryId,
                    userId: action.setDashboardBudgetCardCreateCategoryDataPayload.userId,
                    name: action.setDashboardBudgetCardCreateCategoryDataPayload.categoryName,
                    items: []
                }
                categoriesAndItems.push(categoryObject);
                return categoriesAndItems;
            }(state.categoriesAndItems)
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CREATE_ITEM_DATA) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                itemName: "",
                selectedCategory: 0,
            },
            categoriesAndItems: function (categoriesAndItemsState) {
                let categoriesAndItems = categoriesAndItemsState.slice();

                categoriesAndItems = categoriesAndItems.map(category => {
                    if (category.personalBudgetCategoryId === action.setDashboardBudgetCardCreateItemDataPayload.personalBudgetCategoryId) {
                        let items = category.items.slice();
                        const itemObject = {
                            personalBudgetCategoryItemId: action.setDashboardBudgetCardCreateItemDataPayload.personalBudgetCategoryItemId,
                            personalBudgetCategoryId: action.setDashboardBudgetCardCreateItemDataPayload.personalBudgetCategoryId,
                            categoryItemId: action.setDashboardBudgetCardCreateItemDataPayload.categoryItemId,
                            userId: action.setDashboardBudgetCardCreateItemDataPayload.userId,
                            name: action.setDashboardBudgetCardCreateItemDataPayload.itemName
                        }
                        items.push(itemObject);

                        category.items = items;
                    }
                    return category;
                })
                return categoriesAndItems;
            }(state.categoriesAndItems)
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CATEGORY_TO_DELETE) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                categoryToDelete: action.setDashboardBudgetCardCategoryToDeletePayload
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CATEGORY_TO_DELETE_DATA) {
        return {
            ...state,
            categoriesAndItems: function (categoriesAndItemsState) {
                let categoriesAndItems = categoriesAndItemsState.slice();
                categoriesAndItems = categoriesAndItems.filter(category => {
                    return category.personalBudgetCategoryId !== action.setDashboardBudgetCardCategoryToDeleteDataPayload
                })
                return categoriesAndItems;
            }(state.categoriesAndItems)
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CATEGORY_ITEM_TO_DELETE) {
        return {
            ...state,
            dashboard: {
                ...state.dashboard,
                categoryItemToDeleteData: {
                    personalBudgetCategoryId: action.setDashboardBudgetCardCategoryItemToDeletePayload.personalBudgetCategoryId,
                    personalBudgetCategoryItemId: action.setDashboardBudgetCardCategoryItemToDeletePayload.personalBudgetCategoryItemId
                }
            }
        }
    }
    if (action.type === SET_DASHBOARD_BUDGET_CARD_CATEGORY_ITEM_TO_DELETE_DATA) {
        return {
            ...state,
            categoriesAndItems: function (categoriesAndItemsState) {
                let categoriesAndItems = categoriesAndItemsState.slice();
                categoriesAndItems = categoriesAndItems.filter(category => {
                    return category.personalBudgetCategoryId !== action.setDashboardBudgetCardCategoryToDeleteDataPayload
                })
                categoriesAndItems = categoriesAndItems.map(category => {
                    if (category.personalBudgetCategoryId === action.setDashboardBudgetCardCategoryItemToDeleteDataPayload.personalBudgetCategoryId) {
                        let items = category.items.slice()
                        items = items.filter(item => item.personalBudgetCategoryItemId === action.setDashboardBudgetCardCategoryItemToDeleteDataPayload.personalBudgetCategoryItemId)
                        category.items = items
                    }
                    return category
                })
                return categoriesAndItems;
            }(state.categoriesAndItems)
        }
    }

    return state;
}


/*
if(action.type === SET_INDIVIDUAL_ACCOUNTS_AMOUNT) {
    return {
        ...state,
        individualAccounts: function(accountsState) {
            const accounts = accountsState.slice();
            accounts.map(account => {
                if(account.accountId === action.setIndividualAccounts) {
                    account.
                }
            })
                return accounts;
        }(state.individualAccounts)
    }
}

if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION) {
    return {
        ...state,
        individualAccounts: function(accountsState) {
            const accounts = accountsState.slice();
            accounts.map(account => {
                if(account.accountId === action.setIndividualAccountsEditTransactionAccountId) {

                    account.transactions.map(transaction => {
                        if(transaction.transactionId === action.setIndividualAccountsEditTransactionTransactionId) {
                            transaction.edit = action.setIndividualAccountsEditTransactionPayload
                        }
                    })
                    account.filteredTransactions.map(transaction => {
                        if(transaction.transactionId === action.setIndividualAccountsEditTransactionTransactionId) {
                            transaction.edit = action.setIndividualAccountsEditTransactionPayload
                        }
                    })
                }
            })
            return accounts;
        }(state.individualAccounts)
    }
}


const date31DaysPrior = (Date.now() - (60000 * 60 * 24 * 31));
if(Date.parse(transaction.date) > date31DaysPrior) {
                transactionsMonthlyAllAccounts.push(transaction);
            }
            if(Date.parse(transaction.date) > date31DaysPrior) {
                if(transaction.transactionTypeId === 1) {
                    //withdrawal
                    withdrawalsQuantity += 1;
                    withdrawalsAmount += transaction.amount;
                }
                if(transaction.transactionTypeId === 2) {
                    //deposit
                    depositsQuantity += 1;
                    depositsAmount += transaction.amount;
                }
                if(transaction.transactionTypeId === 3) {
                    //transfer
                    transferQuantity += 1;
                    transferAmount += transaction.amount;
                }

            }
*/