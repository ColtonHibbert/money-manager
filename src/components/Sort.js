import React from "react";
import { setAccountSummaryCurrentPage } from "../services/actions";

function Sort(props) {
    const {
        setNewArray,
        arrayToSort,
        propertyToCompare,
        typeToCompare,
        setCurrentPage
    } = props;

    const handleAscSort = () => {
        if(typeToCompare === "str") {

        }
        if(typeToCompare === "num") {
            setNewArray(arrayToSort.sort(function(a,b){
                const first = parseFloat(a[propertyToCompare]);
                const second = parseFloat(b[propertyToCompare]);
                return (first - second); 
            }));
        }
        setCurrentPage(0);
    }

    const handleDescSort = () => {
        if(typeToCompare === "str") {

        }
        if(typeToCompare === "num") {
            setNewArray(arrayToSort.sort(function(a,b){
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