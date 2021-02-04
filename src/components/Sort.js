import React from "react";

function Sort(props) {
    const {
        setNewArray,
        arrayToSort,
        propertyToCompare,
        typeToCompare
    } = props;

    const handleAscSort = () => {
        //console.log(propertyToCompare);
        if(typeToCompare === "str") {

        }
        if(typeToCompare === "num") {
                //console.log(arrayToSort.sort(function(a,b){ 
                //console.log(a[propertyToCompare], b[propertyToCompare])
                //return a[propertyToCompare] - b[propertyToCompare] }))
            setNewArray(arrayToSort.sort(function(a,b){
                const first = a[propertyToCompare].slice(1,);
                const second = b[propertyToCompare].slice(1,);
                //console.log(a[propertyToCompare]);
                console.log(first)
                console.log(Number(first))
                //console.log(first - second);
                return (a[propertyToCompare]) - (b[propertyToCompare]) 
            }));
        }
        
    }

    const handleDescSort = () => {
        setNewArray(arrayToSort.sort(function(a,b) { return b[propertyToCompare] - a[propertyToCompare] }));
    }

    return (
        <div>
            <div onClick={() => handleAscSort()}>UP</div>
            <div onClick={() => handleDescSort()}>DOWN</div>
        </div>
    )
}

export default Sort;