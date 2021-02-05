import React from "react";

function Sort(props) {
    const {
        setNewArray,
        arrayToSort,
        propertyToCompare,
        typeToCompare,
        setCurrentPage, 
    } = props;

    const handleAscSort = () => {
        const copyArrayNoMutate = arrayToSort.slice();

        if(typeToCompare === "str") {
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
        if(typeToCompare === "num") {
            setNewArray(copyArrayNoMutate.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (first - second); 
            }));
        }
        setCurrentPage(0);
    }

    const handleDescSort = () => {
        const copyArrayNoMutate = arrayToSort.slice();

        if(typeToCompare === "str") {
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
        if(typeToCompare === "num") {
            setNewArray(copyArrayNoMutate.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (second - first); 
            }));
        }
        setCurrentPage(0);
    }

    return (
        <div>
            <div onClick={() => handleAscSort()}>UP</div>
            <div onClick={() => handleDescSort()}>DOWN</div>
        </div>
    )
}

export default Sort;