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
    SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_DATA
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
    individualAccounts: [
        {
            accountId: 0,
            accountName: "",
            addTransactionAmount: 0,
            addTransactionAmountError: false,
            addTransactionAddError: false,
            addTransactionTransactionTypeId: 0,
            addTransactionTransactionTypeIdError: false,
            addTransactionMemoNote: "",
            addTransactionPersonalBudgetCategoryItemId: 0, 
            addTransactionPersonalBudgetCategoryId: 0,
            currentBalance: 0,
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
                  accountId: 0
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
                accountId: 0
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
    routeHome: "1",
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
          accountId: 0
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
                passwordResetConfirmPasswordError: action.setPasswordResetConfirmPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetPasswordsMatchError: action.setPasswordResetPasswordsMatchErrorPayload
            }
        }
    }
    if(action.type === SET_PASSWORD_RESET_ERROR) {
        return {
            ...state,
            passwordResetErrors: {
                ...state.passwordResetErrors,
                passwordResetError: action.setPasswordResetErrorPayload
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
    if(action.type === SET_MOBILE_MENU) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                mobileMenu: action.setMobileMenuPayload
            }
        }
    }
    if(action.type === TOGGLE_MOBILE_MENU) {
        return {
            ...state, 
            navigation: {
                ...state.navigation,
                mobileMenu: !state.navigation.mobileMenu
            }
        }
    }
    if(action.type === SET_NAVIGATION_ACCOUNT_SELECTED ) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                accountSelected: !state.navigation.accountSelected
            }
        }
    }
    if(action.type === SET_INITIAL_DATA) {

        const summaryPagesRegularOrFilter = configurePagesInReducer(state.accountSummary.entries, action.setInitialDataPayload.initialData.accountSummary);

        const formatStateForIndividualAccounts = () => {
            const formattedIndividualAccounts = [];

            action.setInitialDataPayload.initialData.individualAccounts.map(account => {

                const individualAccountTransactionPagesRegularOrFilter = configurePagesInReducer(3, account.transactions);

                const accountObject = {
                    accountId: account.accountId,
                    accountName: account.accountName,
                    addTransactionAmount: 0,
                    addTransactionAmountError: false,
                    addTransactionAddError: false,
                    addTransactionTransactionTypeId: 0,
                    addTransactionTransactionTypeIdError: false,
                    addTransactionMemoNote: "",
                    addTransactionPersonalBudgetCategoryItemId: 0,
                    addTransactionPersonalBudgetCategoryId: 0,
                    currentBalance: account.currentBalance,
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
                filterPages: summaryPagesRegularOrFilter.pagesArray
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
    if(action.type === SET_ROUTE_HOME) {
        return {
            ...state,
            routeHome: action.setRouteHomePayload
        }
    }
    if(action.type === SET_NAVIGATION_EDIT_PROFILE) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                editProfile: action.setNavigationEditProfilePayload
            }
        }
    }
    if(action.type === SET_NAVIGATION_EDIT_EMAIL) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                editEmail: action.setNavigationEditEmailPayload
            }
        }
    }
    if(action.type === SET_NAVIGATION_EDIT_PASSWORD) {
        return {
            ...state,
            navigation: {
                ...state.navigation,
                editPassword: action.setNavigationEditPasswordPayload
            }
        }
    }
    if(action.type === SET_PROFILE_FIRST_NAME) {
        return {
            ...state,
            profile: {
                ...state.profile,
                firstName: action.setProfileFirstNamePayload
            }
        }
    }
    if(action.type === SET_PROFILE_LAST_NAME) {
        return {
            ...state,
            profile: {
                ...state.profile,
                lastName: action.setProfileLastNamePayload
            }
        }
    }
    if(action.type === SET_PROFILE_ADDRESS) {
        return {
            ...state,
            profile: {
                ...state.profile,
                address: action.setProfileAddressPayload
            }
        }
    }
    if(action.type === SET_PROFILE_PHONE) {
        return {
            ...state,
            profile: {
                ...state.profile,
                phone: action.setProfilePhonePayload
            }
        }
    }
    if(action.type === SET_PROFILE_ABOUT) {
        return {
            ...state,
            profile: {
                ...state.profile,
                about: action.setProfileAboutPayload
            }
        }
    }
    if(action.type === SET_PROFILE_EMAIL) {
        return {
            ...state,
            profile: {
                ...state.profile,
                email: action.setProfileEmailPayload
            }
        }
    }
    if(action.type === SET_PROFILE_PASSWORD) {
        return {
            ...state,
            profile: {
                ...state.profile,
                password: action.setProfilePasswordPayload
            }
        }
    }
    if(action.type === SET_PROFILE_CONFIRM_PASSWORD) {
        return {
            ...state,
            profile: {
                ...state.profile,
                confirmPassword: action.setProfileConfirmPasswordPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                error: action.setProfileErrorsErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_ERROR_MESSAGE) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                errorMessage: action.setProfileErrorsErrorMessagePayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_EMAIL_ERROR) {
        return {
            ...state, 
            profileErrors: {
                ...state.profileErrors,
                emailError: action.setProfileErrorsEmailErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_PASSWORD_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordError: action.setProfileErrorsPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_CONFIRM_PASSWORD_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                confirmPasswordError: action.setProfileErrorsConfirmPasswordErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_PASSWORDS_MATCH_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordsMatchError: action.setProfileErrorsPasswordsMatchErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordConfirmationError: action.setPasswordConfirmationErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_PASSWORD_CONFIRMATION_ERROR_MESSAGE) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                passwordConfirmationErrorMessage: action.setPasswordConfirmationErrorMessagePayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                emailConfirmationError: action.setProfileErrorsEmailConfirmationErrorPayload
            }
        }
    }
    if(action.type === SET_PROFILE_ERRORS_EMAIL_CONFIRMATION_ERROR_MESSAGE) {
        return {
            ...state,
            profileErrors: {
                ...state.profileErrors,
                emailConfirmationErrorMessage: action.setProfileErrorsEmailConfirmationErrorMessagePayload
            }
        }
    }
    if(action.type === SET_USER_PROFILE_DATA) {
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
    if(action.type === SET_USER_PROFILE_EMAIL) {
        return {
            ...state,
            user: {
                ...state.user,
                email: action.setUserProfileEmailPayload.updatedEmail
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_ENTRIES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                entries: action.setAccountSummaryEntriesPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_TOTAL_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                totalPages: action.setAccountSummaryTotalPagesPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                pages: action.setAccountSummaryPagesPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_CURRENT_PAGE) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                currentPage: action.setAccountSummaryCurrentPagePayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_FILTER) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filter: action.setAccountSummaryFilterPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_FILTERED_ACCOUNTS) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filteredAccounts: action.setAccountSummaryFilteredAccountsPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_FILTER_TOTAL_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filterTotalPages: action.setAccountSummaryFilterTotalPagesPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_FILTER_CURRENT_PAGE) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filterCurrentPage: action.setAccountSummaryFilterCurrentPagePayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_FILTER_PAGES) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                filterPages: action.setAccountSummaryFilterPagesPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_ACCOUNTS) {
        console.log("reducer, state set account summary accounts", state)
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                accounts: action.setAccountSummaryAccountsPayload
            }
        }
    }
    if(action.type === SET_ACCOUNT_SUMMARY_SEARCH) {
        return {
            ...state,
            accountSummary: {
                ...state.accountSummary,
                search: action.setAccountSummarySearchPayload
            }
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_TRANSACTION_SELECTION) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsFilterTransactionSelectionAccountId) {
                        account.filterTransactionSelection = action.setIndividualAccountsFilterTransactionSelectionPayload
                    }
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ENTRIES) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEntriesAccountId) {
                        account.entries = action.setIndividualAccountsEntriesPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_TOTAL_PAGES) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsTotalPagesAccountId) {
                        account.totalPages = action.setIndividualAccountsTotalPagesPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_PAGES) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsPagesAccountId) {
                        account.pages = action.setIndividualAccountsPagesPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_CURRENT_PAGE) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsCurrentPageAccountId) {
                        account.currentPage = action.setIndividualAccountsCurrentPagePayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsFilterAccountId) {
                        account.filter = action.setIndividualAccountsFilterPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_FILTERED_TRANSACTIONS) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsFilteredTransactionsAccountId) {
                        account.filteredTransactions = action.setIndividualAccountsFilteredTransactionsPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_TOTAL_PAGES) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsFilterTotalPagesAccountId) {
                        account.filterTotalPages = action.setIndividualAccountsFilterTotalPagesPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_CURRENT_PAGE) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsFilterCurrentPageAccountId) {
                        account.filterCurrentPage = action.setIndividualAccountsFilterCurrentPagePayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_FILTER_PAGES) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsFilterPagesAccountId) {
                        account.filterPages = action.setIndividualAccountsFilterPagesPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_TRANSACTIONS) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsTransactionsAccountId) {
                        account.transactions = action.setIndividualAccountsTransactionsPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_SEARCH) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsSearchAccountId) {
                        account.search = action.setIndividualAccountsSearchPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEditAccountAccountId) {
                        account.editAccount = action.setIndividualAccountsEditAccountPayload
                    }
                })
                return accounts;
            }(state.individualAccounts)
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_NAME) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEditAccountNameAccountId) {
                        account.editAccountName = action.setIndividualAccountsEditAccountNamePayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_TYPE_ID) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEditAccountTypeIdAccountId) {
                        account.editAccountTypeId = Number(action.setIndividualAccountsEditAccountTypeIdPayload)
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_LOW_ALERT_BALANCE) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEditAccountLowAlertBalanceAccountId) {
                        account.editAccountLowAlertBalance = Number(action.setIndividualAccountsEditAccountLowAlertBalancePayload)
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 

        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEditAccountErrorAccountId) {
                        account.editAccountError = action.setIndividualAccountsEditAccountErrorPayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_EDIT_ACCOUNT_ERROR_MESSAGE) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsEditAccountErrorMessageAccountId) {
                        account.editAccountErrorMessage = action.setIndividualAccountsEditAccountErrorMessagePayload
                    }   
                })
                 return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_UPDATE_ACCOUNT) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                        account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                        account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                        account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                    }   
                })
                 return accounts;
            }(state.individualAccounts),
            accounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                        account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                        account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                        account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                    }   
                })
                 return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function(accountsState) {
                    const accounts = accountsState.slice();
                    accounts.map(account => {
                        if(account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                            account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                            account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                            account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                        }   
                    })
                     return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function(accountsState) {
                    const accounts = accountsState.slice();
                    accounts.map(account => {
                        if(account.accountId === action.setIndividualAccountsUpdateAccountAccountId) {
                            account.accountName = action.setIndividualAccountsUpdateAccountPayload.accountName
                            account.accountTypeId = action.setIndividualAccountsUpdateAccountPayload.accountTypeId
                            account.lowAlertBalance = action.setIndividualAccountsUpdateAccountPayload.lowAlertBalance
                        }   
                    })
                     return accounts;
                }(state.accountSummary.filteredAccounts),
            }
        } 
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionAmountAccountId) {
                        account.addTransactionAmount = Number(action.setIndividualAccountsAddTransactionAmountPayload)
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionTransactionTypeIdAccountId) {
                        account.addTransactionTransactionTypeId = Number(action.setIndividualAccountsAddTransactionTransactionTypeIdPayload)
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_MEMO_NOTE) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionMemoNoteAccountId) {
                        account.addTransactionMemoNote = action.setIndividualAccountsAddTransactionMemoNotePayload
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ITEM_ID) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionPersonalBudgetCategoryItemIdAccountId) {
                        account.addTransactionPersonalBudgetCategoryItemId = Number(action.setIndividualAccountsAddTransactionPersonalBudgetCategoryItemIdPayload)
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_CATEGORY_ID) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionPersonalBudgetCategoryIdAccountId) {
                        account.addTransactionPersonalBudgetCategoryId = action.setIndividualAccountsAddTransactionPersonalBudgetCategoryIdPayload
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_AMOUNT_ERROR) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionAmountErrorAccountId) {
                        account.addTransactionAmountError = action.setIndividualAccountsAddTransactionAmountErrorPayload
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_PERSONAL_BUDGET_ERROR) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionPersonalBudgetErrorAccountId) {
                        account.addTransactionPersonalBudgetError = action.setIndividualAccountsAddTransactionPersonalBudgetErrorPayload
                    }   
                })
                return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_TRANSACTION_TYPE_ID_ERROR) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionTransactionTypeIdErrorAccountId) {
                        console.log(action);
                        account.addTransactionTransactionTypeIdError = action.setIndividualAccountsAddTransactionTransactionTypeIdErrorPayload
                    }   
                })
            return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_ERROR) {
        return {
            ...state,
            individualAccounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionAddErrorAccountId) {
                        account.addTransactionAddError = action.setIndividualAccountsAddTransactionAddErrorPayload
                    }   
                })
                    return accounts;
            }(state.individualAccounts) 
        }
    }
    if(action.type === SET_INDIVIDUAL_ACCOUNTS_ADD_TRANSACTION_ADD_DATA) {
        return {
            ...state,
            accounts: function(accountsState) {
                const accounts = accountsState.slice();
                accounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId ) {
                        account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance
                    }
                })
                return accounts;
            }(state.accounts),
            accountSummary: {
                ...state.accountSummary,
                accounts: function(accountsState) {
                    const accounts = accountsState.slice();
                    accounts.map(account => {
                        if(account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId ) {
                            account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance
                        }
                    })
                    return accounts;
                }(state.accountSummary.accounts),
                filteredAccounts: function(accountsState) {
                    const accounts = accountsState.slice();
                    accounts.map(account => {
                        if(account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId ) {
                            account.currentBalance = action.setIndividualAccountsAddTransactionAddDataPayload.configuredAccount.currentBalance
                        }
                    })
                    return accounts;
                }(state.accountSummary.accounts)
            },
            depositsMonthlyAllAccountsAmount: function(amountState) {
                if(action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.transactionTypeId === 2) {
                    return amountState + action.setIndividualAccountsAddTransactionAddDataPayload.configuredTransaction.amount
                } else {
                    return amountState
                }
            }(state.depositsMonthlyAllAccountsAmount),
            depositsMonthlyAllAccountsQuantity: ,
            individualAccounts: function(individualAccountsState) {
                const individualAccounts = individualAccountsState.slice();
                individualAccounts.map(account => {
                    if(account.accountId === action.setIndividualAccountsAddTransactionAddDataAccountId) {
                        //account. = 
                        //action.setIndividualAccountsAddTransactionAddData
                    }   
                })
                return accounts;
            }(state.individualAccounts) 
        }
    }
    
    return state;
}


/*
if(action.type === SET_INDIVIDUAL_ACCOUNTS_) {
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