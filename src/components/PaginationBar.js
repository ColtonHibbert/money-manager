import React from "react";

function PaginationBar(props) {

    const {
        startEntry,
        finishEntry,
        totalEntries,
        totalPages,
        currentPage
    } = props;

    return (
        <div>
            <div className="w-100 flex flex-row pl2 pr2 justify-between
            pl3-l pr3-l
            ">
                <div className="w-30 custom-gray">{`Showing ${startEntry + 1} to ${finishEntry} of ${totalEntries} results`}</div> 
                <div className="flex flex-row">

                </div>
            </div>
        </div>
    )
}

export default PaginationBar;