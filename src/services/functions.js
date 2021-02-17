function configurePages(value, setEntries, setTotalPages, setCurrentPage, setPages, passedAccounts) {
    //console.log("setPages:", setPages);
    value = parseFloat(value);
    const numberOfPages = (Math.ceil(passedAccounts.length / value));
    setEntries(value);
    setTotalPages(numberOfPages);
    setCurrentPage(0);
    const modifiedPages = pagesArray(value, passedAccounts, numberOfPages);
    setPages(modifiedPages);
}

const pagesArray = (value, passedAccounts, numberOfPages) => {
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
        
        if(baseArray[baseArray.length -1 ].finishEntry >= passedAccounts.length) {
            baseArray[baseArray.length - 1].finishEntry = passedAccounts.length;
            continue
        } 
        start += value;
        end += value;
    }
    return baseArray;
}

const handleFilter = (value, setTotalPages, setCurrentPage, setPages, passedArray, arrayType, accountTypeName, currentEntries ) => {
    const search= value.trim();
    if(search !== "") {
        const searchRegex = new RegExp(search, "i");
       
        const filteredArray = passedArray.filter(entry => {
            if(arrayType === "accountsummary") {
                return (searchRegex.test(entry.accountName) || searchRegex.test(entry.currentBalance) || searchRegex.test(entry.lowAlertBalance) || searchRegex.test(entry.firstName));
            }
            if(arrayType === "individualtransactions") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
            if(arrayType === "individualtransactionsallaccounts") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
            if(arrayType === "householdaccountsummary") {
                return (searchRegex.test(entry.accountName) || searchRegex.test(entry.currentBalance) || searchRegex.test(entry.lowAlertBalance) || searchRegex.test(entry.firstName));
            }
            if(arrayType === "householdtransactions") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
            if(arrayType === "householdtransactionsallaccounts") {
                return(searchRegex.test(entry.amount) || searchRegex.test(entry.date) || searchRegex.test(entry.memoNote) || searchRegex.test(entry.categoryItemName) || searchRegex.test(accountTypeName))
            }
        })
        const numberOfPages = (Math.ceil(filteredArray.length / currentEntries));
        const modifiedPages = pagesArray(currentEntries, filteredArray, numberOfPages);

        setTotalPages(numberOfPages);
        setCurrentPage(0);
        setFilteredArray(filteredArray);
        console.log("modified pages", modifiedPages, numberOfPages)
        setFilterPages(modifiedPages)
        setFilter(true);
        console.log("filteredAccounts: ",filteredArray);
    }
    if(search === "") {
        const numberOfPages = (Math.ceil(passedArray.length / currentEntries));
        const modifiedPages = pagesArray(currentEntries, passedArray, numberOfPages);

        setPages(modifiedPages);
        setCurrentPage(0);
        setTotalPages(numberOfPages);
        setFilter(false);
        setFilteredArray(passedArrays);
    }
}