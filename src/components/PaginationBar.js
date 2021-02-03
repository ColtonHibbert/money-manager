import React from "react";

function PaginationBar(props) {

    const {
        startEntry,
        finishEntry,
        totalEntries,
        totalPages,
        currentPage
    } = props;

    console.log("currentPage paginationBar: ", currentPage)
    return (
        <div>
            <div className="w-100 flex flex-row pl2 pr2 justify-between
            pl3-l pr3-l
            ">
                <div className="w-30 custom-gray">{`Showing ${startEntry + 1} to ${finishEntry} of ${totalEntries} results`}</div> 
                <div className="flex flex-row">
                    <div>Previous</div>
                    {
                        (totalPages === 1) ?
                        <div>1</div>
                        : ""
                    }
                    {
                        (totalPages === 2) ?
                        <div className="flex flex-row">
                            <div>1</div>
                            <div>2</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages === 3) ?
                        <div className="flex flex-row">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages === 4) ?
                        <div className="flex flex-row">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages === 5) ?
                        <div className="flex flex-row">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages > 5) ?
                        <div className="flex flex-row">
                            <div>1</div>
                            {   
                                (currentPage === 0) ?
                                "" : (currentPage === 1) ?
                                "" : <div>{currentPage}</div>
                            }
                            {
                                (currentPage === totalPages - 1 && currentPage !== 0 && currentPage !== 1) ?
                                "" : <div>{currentPage + 1}</div>
                            }
                            {
                                (currentPage === totalPages - 2) ?
                                "" : <div>{currentPage + 2}</div>
                            }
                            <div>{totalPages}</div>
                        </div>
                        : ""
                    }
                    <div>Next</div>
                </div>
            </div>
        </div>
    )
}

export default PaginationBar;
/*

*/