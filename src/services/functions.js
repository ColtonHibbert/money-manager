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

const handleFilter = (value, setTotalPages, setCurrentPage, setPages, passedArray, checkPropertiesArray ) => {
    const search= value.trim();
    if(search !== "") {
        const searchRegex = new RegExp(search, "i");
        const buildTestProperties = () => {
            
        }
        const filteredArray = passedArray.filter(entry => {
            return (searchRegex.test(entry.accountName) || searchRegex.test(entry.currentBalance) || searchRegex.test(entry.lowAlertBalance) || searchRegex.test(entry.firstName));
        })
        const numberOfPages = (Math.ceil(filteredAccounts.length / accountSummary.entries));
        const modifiedPages = pagesArray(accountSummary.entries ,filteredAccounts, numberOfPages);

        setAccountSummaryFilterTotalPages(numberOfPages);
        setAccountSummaryFilterCurrentPage(0);
        setAccountSummaryFilteredAccounts(filteredAccounts);
        console.log("modified pages", modifiedPages, numberOfPages)
        setAccountSummaryFilterPages(modifiedPages)
        setAccountSummaryFilter(true);
        console.log("filteredAccounts: ",filteredAccounts);
    }
    if(search === "") {
        const numberOfPages = (Math.ceil(accountSummary.accounts.length / accountSummary.entries));
        const modifiedPages = pagesArray(accountSummary.entries, accountSummary.accounts, numberOfPages);

        setAccountSummaryPages(modifiedPages);
        setAccountSummaryCurrentPage(0);
        setAccountSummaryTotalPages(numberOfPages);
        setAccountSummaryFilter(false);
        setAccountSummaryFilteredAccounts(accountSummary.accounts);
    }
}