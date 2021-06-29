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
    SET_DASHBOARD_BUDGET_CARD_CATEGORY_TO_DELETE
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

export const setNavigationEditProfile = (payload) => {
    return {
        type: SET_NAVIGATION_EDIT_PROFILE,
        setNavigationEditProfilePayload: payload
    }
}

export const setNavigationEditEmail = (payload) => {
    return {
        type: SET_NAVIGATION_EDIT_EMAIL,
        setNavigationEditEmailPayload: payload
    }
}

export const setNavigationEditPassword = (payload) => {
    return {
        type: SET_NAVIGATION_EDIT_PASSWORD,
        setNavigationEditPasswordPayload: payload
    }
}

export const setProfileFirstName = (payload) => {
    return {
        type: SET_PROFILE_FIRST_NAME,
        setProfileFirstNamePayload: payload
    }
}

export const setProfileLastName = (payload) => {
    return {
        type: SET_PROFILE_LAST_NAME,
        setProfileLastNamePayload: payload
    }
}

export const setProfileAddress = (payload) => {
    return {
        type: SET_PROFILE_ADDRESS,
        setProfileAddressPayload: payload
    }
}

export const setProfilePhone = (payload) => {
    return {
        type: SET_PROFILE_PHONE,
        setProfilePhonePayload: payload
    }
}

export const setProfileAbout = (payload) => {
    return {
        type: SET_PROFILE_ABOUT,
        setProfileAboutPayload: payload
    }
}

export const setProfileEmail = (payload) => {
    return {
        type: SET_PROFILE_EMAIL,
        setProfileEmailPayload: payload
    }
}

export const setProfilePassword = (payload) => {
    return {
        type: SET_PROFILE_PASSWORD, 
        setProfilePasswordPayload: payload
    }
}

export const setProfileConfirmPassword = (payload) => {
    return {
        type: SET_PROFILE_CONFIRM_PASSWORD,
        setProfileConfirmPasswordPayload: payload
    }
}

export const setProfileErrorsError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_ERROR,
        setProfileErrorsErrorPayload: payload
    }
}

export const setProfileErrorsErrorMessage = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_ERROR_MESSAGE,
        setProfileErrorsErrorMessagePayload: payload
    }
}

export const setProfileErrorsEmailError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_EMAIL_ERROR,
        setProfileErrorsEmailErrorPayload: payload
    }
}

export const setProfileErrorsPasswordError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_PASSWORD_ERROR,
        setProfileErrorsPasswordErrorPayload: payload
    }
}

export const setProfileErrorsConfirmPasswordError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_CONFIRM_PASSWORD_ERROR,
        setProfileErrorsConfirmPasswordErrorPayload: payload
    }
}

export const setProfileErrorsPasswordsMatchError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_PASSWORDS_MATCH_ERROR,
        setProfileErrorsPasswordsMatchErrorPayload: payload
    }
}

export const setProfileErrorsPasswordConfirmationError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR,
        setProfileErrorsPasswordConfirmationErrorPayload: payload
    }
}

export const setProfileErrorsPasswordConfirmationErrorMessage = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR_MESSAGE, 
        setProfileErrorsPasswordConfirmationErrorMessagePayload: payload
    }
}

export const setProfileErrorsEmailConfirmationError = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR,
        setProfileErrorsEmailConfirmationErrorPayload: payload
    }
}

export const setProfileErrorsEmailConfirmationErrorMessage = (payload) => {
    return {
        type: SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR_MESSAGE,
        setProfileErrorsEmailConfirmationErrorMessagePayload: payload
    }
}

export const setUserProfileData = (payload) => {
    return {
        type: SET_USER_PROFILE_DATA,
        setUserProfileDataPayload: payload
    }
}

export const setUserProfileEmail = (payload) => {
    return {
        type: SET_USER_PROFILE_EMAIL,
        setUserProfileEmailPayload: payload
    }
}

export const setAccountSummaryEntries = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_ENTRIES,
        setAccountSummaryEntriesPayload: payload
    }
}

export const setAccountSummaryTotalPages = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_TOTAL_PAGES,
        setAccountSummaryTotalPagesPayload: payload
    }
}

export const setAccountSummaryPages = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_PAGES,
        setAccountSummaryPagesPayload: payload
    }
}

export const setAccountSummaryCurrentPage = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_CURRENT_PAGE,
        setAccountSummaryCurrentPagePayload: payload
    }
}

export const setAccountSummaryFilter = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_FILTER,
        setAccountSummaryFilterPayload: payload
    }
}

export const setAccountSummaryFilteredAccounts = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_FILTERED_ACCOUNTS,
        setAccountSummaryFilteredAccountsPayload: payload
    }
}

export const setAccountSummaryFilterTotalPages = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_FILTER_TOTAL_PAGES,
        setAccountSummaryFilterTotalPagesPayload: payload
    }
}

export const setAccountSummaryFilterCurrentPage = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_FILTER_CURRENT_PAGE,
        setAccountSummaryFilterCurrentPagePayload: payload
    }
}

export const setAccountSummaryFilterPages = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_FILTER_PAGES,
        setAccountSummaryFilterPagesPayload: payload
    }
}

export const setAccountSummaryAccounts = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_ACCOUNTS,
        setAccountSummaryAccountsPayload: payload
    }
}

export const setAccountSummarySearch = (payload) => {
    return {
        type: SET_ACCOUNT_SUMMARY_SEARCH,
        setAccountSummarySearchPayload: payload
    }
}

export const setIndividualAccountsFilterTransactionSelection = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_TRANSACTION_SELECTION,
        setIndividualAccountsFilterTransactionSelectionAccountId: accountId,
        setIndividualAccountsFilterTransactionSelectionPayload: payload,
    }
}

export const setIndividualAccountsEntries = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ENTRIES,
        setIndividualAccountsEntriesAccountId: accountId,
        setIndividualAccountsEntriesPayload: payload,
    }
}

export const setIndividualAccountsTotalPages = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_TOTAL_PAGES,
        setIndividualAccountsTotalPagesAccountId: accountId,
        setIndividualAccountsTotalPagesPayload: payload
    }
}

export const setIndividualAccountsPages = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_PAGES,
        setIndividualAccountsPagesAccountId: accountId,
        setIndividualAccountsPagesPayload: payload
    }
}

export const setIndividualAccountsCurrentPage = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_CURRENT_PAGE,
        setIndividualAccountsCurrentPageAccountId: accountId,
        setIndividualAccountsCurrentPagePayload: payload
    }
}

export const setIndividualAccountsFilter = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER,
        setIndividualAccountsFilterAccountId: accountId,
        setIndividualAccountsFilterPayload: payload
    }
}

export const setIndividualAccountsFilteredTransactions = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTERED_TRANSACTIONS,
        setIndividualAccountsFilteredTransactionsAccountId: accountId,
        setIndividualAccountsFilteredTransactionsPayload: payload
    }
}

export const setIndividualAccountsFilterTotalPages = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_TOTAL_PAGES,
        setIndividualAccountsFilterTotalPagesAccountId: accountId,
        setIndividualAccountsFilterTotalPagesPayload: payload
    }
}

export const setIndividualAccountsFilterCurrentPage = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_CURRENT_PAGE,
        setIndividualAccountsFilterCurrentPageAccountId: accountId,
        setIndividualAccountsFilterCurrentPagePayload: payload
    }
}

export const setIndividualAccountsFilterPages = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_PAGES,
        setIndividualAccountsFilterPagesAccountId: accountId,
        setIndividualAccountsFilterPagesPayload: payload
    }
}

export const setIndividualAccountsTransactions = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_TRANSACTIONS,
        setIndividualAccountsTransactionsAccountId: accountId,
        setIndividualAccountsTransactionsPayload: payload
    }
}

export const setIndividualAccountsSearch = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_SEARCH,
        setIndividualAccountsSearchAccountId: accountId,
        setIndividualAccountsSearchPayload: payload
    }
}

export const setIndividualAccountsEditAccount = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT,
        setIndividualAccountsEditAccountAccountId: accountId,
        setIndividualAccountsEditAccountPayload: payload
    }
}

export const setIndividualAccountsEditAccountName = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_NAME,
        setIndividualAccountsEditAccountNameAccountId: accountId,
        setIndividualAccountsEditAccountNamePayload: payload
    }
}

export const setIndividualAccountsEditAccountTypeId = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_TYPE_ID,
        setIndividualAccountsEditAccountTypeIdAccountId: accountId,
        setIndividualAccountsEditAccountTypeIdPayload: payload
    }
}

export const setIndividualAccountsEditAccountLowAlertBalance = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_LOW_ALERT_BALANCE,
        setIndividualAccountsEditAccountLowAlertBalanceAccountId: accountId,
        setIndividualAccountsEditAccountLowAlertBalancePayload: payload
    }
}

export const setIndividualAccountsEditAccountError = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR,
        setIndividualAccountsEditAccountErrorAccountId: accountId,
        setIndividualAccountsEditAccountErrorPayload: payload
    }
}

export const setIndividualAccountsEditAccountErrorMessage = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR_MESSAGE,
        setIndividualAccountsEditAccountErrorMessageAccountId: accountId,
        setIndividualAccountsEditAccountErrorMessagePayload: payload

    }
}

export const setIndividualAccountsUpdateAccount = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_UPDATE_ACCOUNT,
        setIndividualAccountsUpdateAccountAccountId: accountId,
        setIndividualAccountsUpdateAccountPayload: payload
    }
}

export const setIndividualAccountsAddTransactionAmount = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT,
        setIndividualAccountsAddTransactionAmountAccountId: accountId,
        setIndividualAccountsAddTransactionAmountPayload: payload
    }
}

export const setIndividualAccountsAddTransactionTransactionTypeId = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID,
        setIndividualAccountsAddTransactionTransactionTypeIdAccountId: accountId,
        setIndividualAccountsAddTransactionTransactionTypeIdPayload: payload
    }
}

export const setIndividualAccountsAddTransactionMemoNote = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_MEMO_NOTE,
        setIndividualAccountsAddTransactionMemoNoteAccountId: accountId,
        setIndividualAccountsAddTransactionMemoNotePayload: payload
    }
}

export const setIndividualAccountsAddTransactionPersonalBudgetCategoryItemId = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID,
        setIndividualAccountsAddTransactionPersonalBudgetCategoryItemIdAccountId: accountId,
        setIndividualAccountsAddTransactionPersonalBudgetCategoryItemIdPayload: payload
    }
}

export const setIndividualAccountsAddTransactionPersonalBudgetCategoryId = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID,
        setIndividualAccountsAddTransactionPersonalBudgetCategoryIdAccountId: accountId, 
        setIndividualAccountsAddTransactionPersonalBudgetCategoryIdPayload: payload
    }
}

 
export const setIndividualAccountsAddTransactionAmountError = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT_ERROR,
        setIndividualAccountsAddTransactionAmountErrorAccountId: accountId,
        setIndividualAccountsAddTransactionAmountErrorPayload: payload
    }
}

export const setIndividualAccountsAddTransactionPersonalBudgetError = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_ERROR,
        setIndividualAccountsAddTransactionPersonalBudgetErrorAccountId: accountId,
        setIndividualAccountsAddTransactionPersonalBudgetErrorPayload: payload
    }
}

export const setIndividualAccountsAddTransactionTransactionTypeIdError = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID_ERROR,
        setIndividualAccountsAddTransactionTransactionTypeIdErrorAccountId: accountId, 
        setIndividualAccountsAddTransactionTransactionTypeIdErrorPayload: payload
    }
}

export const setIndividualAccountsAddTransactionAddError = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_ERROR,
        setIndividualAccountsAddTransactionAddErrorAccountId: accountId, 
        setIndividualAccountsAddTransactionAddErrorPayload: payload
    }
}

export const setIndividualAccountsAddTransactionAddData = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_DATA,
        setIndividualAccountsAddTransactionAddDataAccountId: accountId,
        setIndividualAccountsAddTransactionAddDataPayload: payload
    }
}

export const setIndividualAccountsAddTransactionClear = (accountId) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_CLEAR,
        setIndividualAccountsAddTransactionClearAccountId: accountId
    }
}

export const setIndividualAccountsEditTransaction = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION,
        setIndividualAccountsEditTransactionAccountId: accountId, 
        setIndividualAccountsEditTransactionTransactionId: transactionId,
        setIndividualAccountsEditTransactionPayload: payload
    }
}

export const setIndividualAccountsEditTransactionAmount = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_AMOUNT,
        setIndividualAccountsEditTransactionAmountAccountId: accountId, 
        setIndividualAccountsEditTransactionAmountTransactionId: transactionId,
        setIndividualAccountsEditTransactionAmountPayload: payload
    }
}

export const setIndividualAccountsEditTransactionTransactionTypeId = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_TRANSACTION_TYPE_ID,
        setIndividualAccountsEditTransactionTransactionTypeIdAccountId: accountId, 
        setIndividualAccountsEditTransactionTransactionTypeIdTransactionId: transactionId,
        setIndividualAccountsEditTransactionTransactionTypeIdPayload: payload
    }
}

export const setIndividualAccountsEditTransactionMemoNote = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_MEMO_NOTE,
        setIndividualAccountsEditTransactionMemoNoteAccountId: accountId, 
        setIndividualAccountsEditTransactionMemoNoteTransactionId: transactionId,
        setIndividualAccountsEditTransactionMemoNotePayload: payload
    }
}

export const setIndividualAccountsEditTransactionPersonalBudgetCategoryId = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID,
        setIndividualAccountsEditTransactionPersonalBudgetCategoryIdAccountId: accountId, 
        setIndividualAccountsEditTransactionPersonalBudgetCategoryIdTransactionId: transactionId,
        setIndividualAccountsEditTransactionPersonalBudgetCategoryIdPayload: payload
    }
}

export const setIndividualAccountsEditTransactionPersonalBudgetCategoryItemId = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID,
        setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdAccountId: accountId, 
        setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdTransactionId: transactionId,
        setIndividualAccountsEditTransactionPersonalBudgetCategoryItemIdPayload: payload
    }
}

export const setIndividualAccountsEditTransactionCancel = (accountId, transactionId ) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_CANCEL,
        setIndividualAccountsEditTransactionCancelAccountId: accountId, 
        setIndividualAccountsEditTransactionCancelTransactionId: transactionId,
    }
}

export const setIndividualAccountsEditTransactionDeleteDisplay = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DELETE_DISPLAY,
        setIndividualAccountsEditTransactionDeleteDisplayAccountId: accountId, 
        setIndividualAccountsEditTransactionDeleteDisplayTransactionId: transactionId,
        setIndividualAccountsEditTransactionDeleteDisplayPayload: payload
    }
}

export const setIndividualAccountsEditTransactionError = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_ERROR,
        setIndividualAccountsEditTransactionErrorAccountId: accountId,
        setIndividualAccountsEditTransactionErrorTransactionId: transactionId,
        setIndividualAccountsEditTransactionErrorPayload: payload
    }
}

export const setIndividualAccountsEditTransactionData = (account, transaction, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DATA,
        setIndividualAccountsEditTransactionDataAccount: account,
        setIndividualAccountsEditTransactionDataTransaction: transaction,
        setIndividualAccountsEditTransactionDataPayload: payload
    }
}

export const setIndividualAccountsEditTransactionDeleteConfirmation = (account, transaction, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_EDIT_TRANSACTION_DELETE_CONFIRMATION,
        setIndividualAccountsEditTransactionDeleteConfirmationAccount: account, 
        setIndividualAccountsEditTransactionDeleteConfirmationTransaction: transaction,
        setIndividualAccountsEditTransactionDeleteConfirmationPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransaction = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION,
        setIndividualAccountsFilterEditTransactionAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionPayload: payload
    }
}
export const setIndividualAccountsFilterEditTransactionAmount = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_AMOUNT,
        setIndividualAccountsFilterEditTransactionAmountAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionAmountTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionAmountPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionTransactionTypeId = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_TRANSACTION_TYPE_ID,
        setIndividualAccountsFilterEditTransactionTransactionTypeIdAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionTransactionTypeIdTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionTransactionTypeIdPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionMemoNote = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_MEMO_NOTE,
        setIndividualAccountsFilterEditTransactionMemoNoteAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionMemoNoteTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionMemoNotePayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryId = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID,
        setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryIdPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemId = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID,
        setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionPersonalBudgetCategoryItemIdPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionCancel = (accountId, transactionId ) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_CANCEL,
        setIndividualAccountsFilterEditTransactionCancelAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionCancelTransactionId: transactionId,
    }
}

export const setIndividualAccountsFilterEditTransactionDeleteDisplay = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DELETE_DISPLAY,
        setIndividualAccountsFilterEditTransactionDeleteDisplayAccountId: accountId, 
        setIndividualAccountsFilterEditTransactionDeleteDisplayTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionDeleteDisplayPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionError = (accountId, transactionId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_ERROR,
        setIndividualAccountsFilterEditTransactionErrorAccountId: accountId,
        setIndividualAccountsFilterEditTransactionErrorTransactionId: transactionId,
        setIndividualAccountsFilterEditTransactionErrorPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionData = (account, transaction, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DATA,
        setIndividualAccountsFilterEditTransactionDataAccount: account,
        setIndividualAccountsFilterEditTransactionDataTransaction: transaction,
        setIndividualAccountsFilterEditTransactionDataPayload: payload
    }
}

export const setIndividualAccountsFilterEditTransactionDeleteConfirmation = (account, transaction, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_FILTER_EDIT_TRANSACTION_DELETE_CONFIRMATION,
        setIndividualAccountsFilterEditTransactionDeleteConfirmationAccount: account, 
        setIndividualAccountsFilterEditTransactionDeleteConfirmationTransaction: transaction,
        setIndividualAccountsFilterEditTransactionDeleteConfirmationPayload: payload
    }
}

export const setIndividualAccountsDeleteAccountDisplay = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_DISPLAY,
        setIndividualAccountsDeleteAccountDisplayAccountId: accountId,
        setIndividualAccountsDeleteAccountDisplayPayload: payload
    }
}

export const setIndividualAccountsDeleteAccountTextValidate = (accountId, payload) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_TEXT_VALIDATE,
        setIndividualAccountsDeleteAccountTextValidateAccountId: accountId,
        setIndividualAccountsDeleteAccountTextValidatePayload: payload
    }
}

export const setIndividualAccountsDeleteAccountConfirmation = (accountId) => {
    return {
        type: SET_INDIVIDUAL_ACCOUNTS_DELETE_ACCOUNT_CONFIRMATION,
        setIndividualAccountsDeleteAccountConfirmationAccountId: accountId,
    }
}

export const setAddAccountAccountName = (payload) => {
    return {
        type: SET_ADD_ACCOUNT_ACCOUNT_NAME,
        setAddAccountAccountNamePayload: payload
    }
}

export const setAddAccountAccountTypeId = (payload) => {
    return {
        type: SET_ADD_ACCOUNT_ACCOUNT_TYPE_ID,
        setAddAccountAccountTypeIdPayload: payload
    }
}

export const setAddAccountCurrentBalance = (payload) => {
    return {
        type: SET_ADD_ACCOUNT_CURRENT_BALANCE,
        setAddAccountCurrentBalancePayload: payload
    }
}

export const setAddAccountLowAlertBalance = (payload) => {
    return {
        type: SET_ADD_ACCOUNT_LOW_ALERT_BALANCE,
        setAddAccountLowAlertBalancePayload: payload
    }
}

export const setAddAccountError = (payload) => {
    return {
        type: SET_ADD_ACCOUNT_ERROR,
        setAddAccountErrorPayload: payload
    }
}

export const setAddAccountConfirmation = (payload) => {
    return {
        type: SET_ADD_ACCOUNT_CONFIRMATION,
        setAddAccountConfirmationPayload: payload
    }
}

export const setDashboardDisplayBudgetCard = (payload) => {
    return {
        type: SET_DASHBOARD_DISPLAY_BUDGET_CARD,
        setDashboardDisplayBudgetCardPayload: payload
    }
}

export const setDashboardBudgetCardCategoryName = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_CATEGORY_NAME,
        setDashboardBudgetCardCategoryNamePayload: payload
    }
}

export const setDashboardBudgetCardBudgetAmount = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_BUDGET_AMOUNT,
        setDashboardBudgetCardBudgetAmountPayload: payload
    }
}

export const setDashboardBudgetCardCreateCategoryError = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_CREATE_CATEGORY_ERROR,
        setDashboardBudgetCardCreateCategoryErrorPayload: payload
    }
}

export const setDashboardBudgetCardSelectedCategory = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_SELECTED_CATEGORY,
        setDashboardBudgetCardSelectedCategoryPayload: payload
    }
}

export const setDashboardBudgetCardItemName = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_ITEM_NAME,
        setDashboardBudgetCardItemNamePayload: payload
    }
}

export const setDashboardBudgetCardCreateItemError = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_CREATE_ITEM_ERROR,
        setDashboardBudgetCardCreateItemErrorPayload: payload
    }
}

export const setDashboardBudgetCardCreateCategoryData = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_CREATE_CATEGORY_DATA,
        setDashboardBudgetCardCreateCategoryDataPayload: payload
    }
}

export const setDashboardBudgetCardCreateItemData = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_CREATE_ITEM_DATA,
        setDashboardBudgetCardCreateItemDataPayload: payload
    }
}

export const setDashboardBudgetCardCategoryToDelete = (payload) => {
    return {
        type: SET_DASHBOARD_BUDGET_CARD_CATEGORY_TO_DELETE,
        setDashboardBudgetCardCategoryToDeletePayload: payload
    }
}

