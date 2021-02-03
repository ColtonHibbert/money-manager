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
                <div className="w-30 h2 flex items-center custom-gray">{`Showing ${startEntry + 1} to ${finishEntry} of ${totalEntries} results`}</div> 
                <div className="flex flex-row items-center">
                    <div className="mr2 custom-gray pointer">Previous</div>
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
                        <div>
                            {
                                (currentPage < 2) ?
                                <div className="flex flex-row">
                                    <div className="h2 w2 flex justify-center items-center bg-white black pointer">1</div>
                                    <div className="h2 w2 flex justify-center items-center bg-white black pointer">2</div>
                                    <div className="h2 w2 flex justify-center items-center bg-white black pointer">3</div>
                                    <div className="h2 w2 flex justify-center items-center bg-white black pointer">4</div>
                                    <div className="h2 w2 flex justify-center items-center bg-white black pointer">{totalPages}</div>
                                </div>
                                : ""
                            }
                            {
                                (currentPage >= 2 && (currentPage < totalPages - 2) ) ?
                                <div className="flex flex-row">
                                    <div>1</div>
                                    <div>{currentPage}</div>
                                    <div>{currentPage + 1}</div>
                                    <div>{currentPage + 2}</div>
                                    <div>{totalPages}</div>
                                </div>
                                : ""
                            }
                            {
                                (currentPage >= totalPages -2 ) ?
                                <div className="flex flex-row">
                                    <div>1</div>
                                    <div>{totalPages - 2}</div>
                                    <div>{totalPages -1 }</div>
                                    <div>{totalPages}</div>
                                </div>
                                : ""
                            }
                        </div>
                        : ""
                    }
                    <div className="ml2 custom-gray pointer">Next</div>
                </div>
            </div>
        </div>
    )
}

export default PaginationBar;
