import React from "react";
import { connect }  from "react-redux";
import Header from "../components/Header.js";
import Menu from "../components/Menu.js";
import MobileMenu from "../components/MobileMenu.js";
import Dashboard from "./Dashboard.js";
import Profile from "./Profile.js";
import AccountSummary from "./AccountSummary.js";
import IndividualAccount from "../components/IndividualAccount.js";
import Transactions from "./Transactions.js";
import Lobby from "./Lobby.js";
import {
    setMobileMenu, 
    setNavigationAccountSelected, 
    toggleMobileMenu,
    setRouteHome,
    setAccounts,
    setTransactions,
    setIndividualAccountsFilterTransactionSelection,
    setIndividualAccountsEntries,
    setIndividualAccountsTotalPages,
    setIndividualAccountsPages,
    setIndividualAccountsCurrentPage,
    setIndividualAccountsFilter,
    setIndividualAccountsFilteredTransactions,
    setIndividualAccountsFilterTotalPages,
    setIndividualAccountsFilterCurrentPage,
    setIndividualAccountsFilterPages,
    setIndividualAccountsTransactions,
    setIndividualAccountsSearch,
    setIndividualAccountsEditAccount,
    setIndividualAccountsEditAccountName
} from "../services/actions.js";


const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        navigation: state.navigation,
        routeHome: state.routeHome,
        individualAccounts: state.individualAccounts,
        categoriesAndItems: state.categoriesAndItems,
        transactions: state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNavigationAccountSelected: () => dispatch(setNavigationAccountSelected()),
        setMobileMenu: (value) => dispatch(setMobileMenu(value)),
        toggleMobileMenu: () => dispatch(toggleMobileMenu()),
        setRouteHome: (value) => dispatch(setRouteHome(value)),
        setAccounts: (value) => dispatch(setAccounts(value)),
        setTransactions: (value) => dispatch(setTransactions(value)),
        setIndividualAccountsFilterTransactionSelection: (accountId, payload) => dispatch(setIndividualAccountsFilterTransactionSelection(accountId, payload)),
        setIndividualAccountsEntries: (accountId, payload) => dispatch(setIndividualAccountsEntries(accountId, payload)),
        setIndividualAccountsTotalPages: (accountId, payload) => dispatch(setIndividualAccountsTotalPages(accountId, payload)),
        setIndividualAccountsPages: (accountId, payload) => dispatch(setIndividualAccountsPages(accountId, payload)),
        setIndividualAccountsCurrentPage: (accountId, payload) => dispatch(setIndividualAccountsCurrentPage(accountId, payload)),
        setIndividualAccountsFilter: (accountId, payload) => dispatch(setIndividualAccountsFilter(accountId, payload)),
        setIndividualAccountsFilteredTransactions: (accountId, payload) => dispatch(setIndividualAccountsFilteredTransactions(accountId, payload)),
        setIndividualAccountsFilterTotalPages: (accountId, payload) => dispatch(setIndividualAccountsFilterTotalPages(accountId, payload)),
        setIndividualAccountsFilterCurrentPage: (accountId, payload) => dispatch(setIndividualAccountsFilterCurrentPage(accountId, payload)),
        setIndividualAccountsFilterPages: (accountId, payload) => dispatch(setIndividualAccountsFilterPages(accountId, payload)),
        setIndividualAccountsTransactions: (accountId, payload) => dispatch(setIndividualAccountsTransactions(accountId, payload)),
        setIndividualAccountsSearch: (accountId, payload) => dispatch(setIndividualAccountsSearch(accountId, payload)),
        setIndividualAccountsEditAccount: (accountId, payload) => dispatch(setIndividualAccountsEditAccount(accountId, payload))
    }
}


function Home(props) {
    const { navigation, routeHome, individualAccounts } = props;
    return (
        <div className="min-vh-100 w-100 bg-custom-darker-gray">
            <Header {...props}></Header>
            {
                (navigation.mobileMenu) ?
                <MobileMenu {...props}></MobileMenu>
                : ""
            }
            <div className="w-100 flex flex-row w-100">
                <Menu {...props}></Menu>
                <div className="w-100">
                {
                    (routeHome === "profile") ?
                    <Profile {...props} />
                    : ""
                }
                {
                    (routeHome === "dashboard") ?
                    <Dashboard {...props} />
                    : ""
                }
                {
                    (routeHome === "accountsummary") ?
                    <AccountSummary {...props} />
                    : ""
                }
                {
                    (individualAccounts.map(individualAccount => {
                        if (routeHome === individualAccount.accountId.toString()) {
                            return <IndividualAccount {...props} individualAccount={individualAccount} key={individualAccount.accountId}/>
                        } else {
                            return ""
                        }
                    }))
                }
                {
                    (routeHome === "transactions") ? 
                    <Transactions {...props} />
                    : ""
                }
                {
                    (routeHome === "lobby") ?
                    <Lobby {...props}  />
                    : ""
                }
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  