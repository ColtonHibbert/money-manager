export function configurePages(value, setEntries, setTotalPages, setCurrentPage, setPages, passedArray) {
    //console.log("setPages:", setPages);
    value = parseFloat(value);
    const numberOfPages = (Math.ceil(passedArray.length / value));
    setEntries(value);
    setTotalPages(numberOfPages);
    setCurrentPage(0);
    const modifiedPages = pagesArray(value, passedArray, numberOfPages);
    setPages(modifiedPages);
}

export function configureNestedArrayPages(value, id, setEntries, setTotalPages, setCurrentPage, setPages, passedArray ) {
    value = parseFloat(value);
    const numberOfPages = (Math.ceil(passedArray.length / value));
    setEntries(id, value);
    setTotalPages(id, numberOfPages);
    setCurrentPage(id, 0);
    const modifiedPages = pagesArray(value, passedArray, numberOfPages);
    setPages(id, modifiedPages);
}

export const pagesArray = (value, passedArray, numberOfPages) => {
    let baseArray = [];
    let start = 0;
    let end = value;

    for(let i = 0; i < numberOfPages; i++) {
        let page = {
                    pageNumber: i,
                    startEntry: start,
                    finishEntry: end
            };
        baseArray.push(page);
        
        if(baseArray[baseArray.length -1 ].finishEntry >= passedArray.length) {
            baseArray[baseArray.length - 1].finishEntry = passedArray.length;
            continue
        } 
        start += value;
        end += value;
    }
    return baseArray;
}

export const handleFilterTransactionSelection = (accountId, setFilter, setTotalPages, setCurrentPage, setPages, setArray, currentEntries, filterTransactionSelectionType, setSelection, passedArray ) => {
    const filteredArray = passedArray.filter(entry => {
        if(filterTransactionSelectionType === "all") {
            return entry;
        }
        if(entry.transactionTypeId === 1 && filterTransactionSelectionType === "withdrawals" ) {
            return entry;
        }
        if(entry.transactionTypeId === 2 && filterTransactionSelectionType === "deposits" ) {
            return entry;
        }
        if(entry.transactionTypeId === 3 && filterTransactionSelectionType === "transfers" ) {
            return entry;
        }
    })
    console.log("handleFilterTransactionSelection, filteredArray: ", filteredArray);
   
    
    console.log("filteredArray: ", filteredArray);
    const numberOfPages = (Math.ceil(filteredArray.length / currentEntries));
    const modifiedPages = pagesArray(currentEntries, filteredArray, numberOfPages);

    setTotalPages(accountId, numberOfPages);
    setCurrentPage(accountId, 0);
    setArray(accountId, filteredArray);
    console.log("modified pages, numberOfPages", modifiedPages, numberOfPages)
    setPages(accountId, modifiedPages)
    setFilter(accountId, true);
    setSelection(accountId, filterTransactionSelectionType)
    
}


export const handleTransactionFilter = (value, accountId, setFilter, setTotalPages, setCurrentPage, setPages, setArray, currentEntries, filterTransactionSelectionType , arrayType, accountTypeName, passedArray  ) => {
    const search= value.trim();
    
    if(search !== "") {
        const searchRegex = new RegExp(search, "i");

        const filterTransactionSelectionArray = passedArray.filter(entry => {
            if(filterTransactionSelectionType === "all") {
                return entry;
            }
            if(entry.transactionTypeId === 1 && filterTransactionSelectionType === "withdrawals" ) {
                return entry;
            }
            if(entry.transactionTypeId === 2 && filterTransactionSelectionType === "deposits" ) {
                return entry;
            }
            if(entry.transactionTypeId === 3 && filterTransactionSelectionType === "transfers" ) {
                return entry;
            }
        })
        console.log("filterTransactionSelectionArray: ", filterTransactionSelectionArray);
       
        const filteredArray = filterTransactionSelectionArray.filter(entry => {
            if(arrayType === "individualtransactions") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
            if(arrayType === "individualtransactionsallaccounts") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
            if(arrayType === "householdtransactions") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
            if(arrayType === "householdtransactionsallaccounts") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
        })
        console.log("filteredArray: ", filteredArray);
        const numberOfPages = (Math.ceil(filteredArray.length / currentEntries));
        const modifiedPages = pagesArray(currentEntries, filteredArray, numberOfPages);

        setTotalPages(accountId, numberOfPages);
        setCurrentPage(accountId, 0);
        setArray(accountId, filteredArray);
        console.log("modified pages, numberOfPages", modifiedPages, numberOfPages)
        setPages(accountId, modifiedPages)
        setFilter(accountId, true);
        //console.log("filteredAccounts: ",filteredArray);
    }
    if(search === "") {
        const numberOfPages = (Math.ceil(passedArray.length / currentEntries));
        const modifiedPages = pagesArray(currentEntries, passedArray, numberOfPages);

        setPages(accountId, modifiedPages);
        setCurrentPage(accountId, 0);
        setTotalPages(accountId, numberOfPages);
        setFilter(accountId, false);
        setArray(accountId, passedArray);
    }
}

/*
   if(arrayType === "accountsummary") {
                return (searchRegex.test(entry.accountName) || searchRegex.test(entry.currentBalance) || searchRegex.test(entry.lowAlertBalance) || searchRegex.test(entry.firstName));
            }

 if(arrayType === "householdaccountsummary") {
                return (searchRegex.test(entry.accountName) || searchRegex.test(entry.currentBalance) || searchRegex.test(entry.lowAlertBalance) || searchRegex.test(entry.firstName));
            }
*/