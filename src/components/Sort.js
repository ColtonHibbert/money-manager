import React from "react";

function Sort(props) {
    const {
        setNewArray,
        arrayToSort,
        propertyToCompare,
        typeToCompare,
        setCurrentPage, 
        accountId
    } = props;

    const handleAscSort = () => {
        const copyArrayNoMutate = arrayToSort.slice();

        if(typeToCompare === "str" && (accountId === undefined || accountId === null)) {
            setNewArray(copyArrayNoMutate.sort(function(a,b) {
                const first = a[propertyToCompare].toLowerCase();
                const second = b[propertyToCompare].toLowerCase();
                if(first < second) {
                    return -1;
                }
                if(first > second) {
                    return 1;
                }
                return 0;
            }))
        }
        if(typeToCompare === "num" && (accountId === undefined || accountId === null)) {
            setNewArray(copyArrayNoMutate.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (first - second); 
            }));
        }
        if(typeToCompare === "date" && (accountId === undefined || accountId === null)) {
            setNewArray(copyArrayNoMutate.sort(function(a,b){
                const first = Date.parse(a[propertyToCompare]);
                const second = Date.parse(b[propertyToCompare]);
                return (first - second); 
            }));
        }

        //nested

        if(typeToCompare === "str" && (accountId !== undefined && accountId !== null)) {
            setNewArray(accountId, copyArrayNoMutate.sort(function(a,b) {
                const first = a[propertyToCompare].toLowerCase();
                const second = b[propertyToCompare].toLowerCase();
                if(first < second) {
                    return -1;
                }
                if(first > second) {
                    return 1;
                }
                return 0;
            }))
        }
        if(typeToCompare === "num" && (accountId !== undefined && accountId !== null)) {
            setNewArray(accountId, copyArrayNoMutate.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (first - second); 
            }));
        }
        if(typeToCompare === "date" && (accountId !== undefined && accountId !== null)) {
            setNewArray(accountId, copyArrayNoMutate.sort(function(a,b){
                const first = Date.parse(a[propertyToCompare]);
                const second = Date.parse(b[propertyToCompare]);
                return (first - second); 
            }));
        }

        if(accountId !== undefined && accountId !== null) {
            setCurrentPage(accountId, 0)
        } else {
            setCurrentPage(0);
        }
       
    }

    const handleDescSort = () => {
        const copyArrayNoMutate = arrayToSort.slice();

        if(typeToCompare === "str" && (accountId === undefined || accountId === null)) {
            setNewArray(copyArrayNoMutate.sort(function(a,b) {
                const first = a[propertyToCompare].toLowerCase();
                const second = b[propertyToCompare].toLowerCase();
                if(first < second) {
                    return 1;
                }
                if(first > second) {
                    return -1;
                }
                return 0;
            }))
        }
        if(typeToCompare === "num" && (accountId === undefined || accountId === null)) {
            setNewArray(copyArrayNoMutate.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (second - first); 
            }));
        }
        if(typeToCompare === "date" && (accountId === undefined || accountId === null)) {
            setNewArray(copyArrayNoMutate.sort(function(a,b){
                const first = Date.parse(a[propertyToCompare]);
                const second = Date.parse(b[propertyToCompare]);
                return (second - first); 
            }));
        }

        //nested

        if(typeToCompare === "str" && (accountId !== undefined && accountId !== null)) {
            setNewArray(accountId, copyArrayNoMutate.sort(function(a,b) {
                const first = a[propertyToCompare].toLowerCase();
                const second = b[propertyToCompare].toLowerCase();
                if(first < second) {
                    return 1;
                }
                if(first > second) {
                    return -1;
                }
                return 0;
            }))
        }
        if(typeToCompare === "num" && (accountId !== undefined && accountId !== null)) {
            setNewArray(accountId, copyArrayNoMutate.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (second - first); 
            }));
        }
        if(typeToCompare === "date" && (accountId !== undefined && accountId !== null)) {
            setNewArray(accountId, copyArrayNoMutate.sort(function(a,b){
                const first = Date.parse(a[propertyToCompare]);
                const second = Date.parse(b[propertyToCompare]);
                return (second - first); 
            }));
        }

        if(accountId !== undefined && accountId !== null) {
            setCurrentPage(accountId, 0)
        } else {
            setCurrentPage(0);
        }
    }

    return (
        <div>
            <div className="h1 w1 fill-custom-gray" onClick={() => handleAscSort()}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 292.362 292.362" 
                space="preserve">
                <g>
                <path d="M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286
                C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813
                c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
            </div>
            <div className="h1 w1 fill-custom-gray" onClick={() => handleDescSort()}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            viewBox="0 0 292.362 292.362" 
	            space="preserve">
                <g>
                    <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                        C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                        s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
            </div>
        </div>
    )
}

export default Sort;

