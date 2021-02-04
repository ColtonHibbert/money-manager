import React from "react";

function PaginationBar(props) {

    const {
        startEntry,
        finishEntry,
        totalEntries,
        totalPages,
        currentPage,
        setCurrentPage
    } = props;

    const classNoSelect = "h2 w2 flex justify-center items-center custom-gray br1 pointer bg-white-color-black";
    const classSelect = "h2 w2 flex justify-center items-center br1 pointer bg-white-color-black bg-white black";

    const handlePrevious = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if(currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    console.log("currentPage paginationBar: ", currentPage)
    return (
        <div>
            <div className="w-100 flex flex-row pl2 pr2 justify-between
            pl3-l pr3-l
            ">
                <div className="w-30 h2 flex items-center custom-gray">{`Showing ${startEntry + 1} to ${finishEntry} of ${totalEntries} results`}</div> 
                <div className="flex flex-row items-center">
                    <div className="mr2 custom-gray pointer" onClick={() => handlePrevious()}>Previous</div>
                    {
                        (totalPages === 1) ?
                        <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                        : ""
                    }
                    {
                        (totalPages === 2) ?
                        <div className="flex flex-row">
                            <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                            <div className={(currentPage === 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(1)}>2</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages === 3) ?
                        <div className="flex flex-row">
                            <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                            <div className={(currentPage === 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(1)}>2</div>
                            <div className={(currentPage === 2) ? classSelect : classNoSelect} onClick={() => setCurrentPage(2)}>3</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages === 4) ?
                        <div className="flex flex-row">
                            <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                            <div className={(currentPage === 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(1)}>2</div>
                            <div className={(currentPage === 2) ? classSelect : classNoSelect} onClick={() => setCurrentPage(2)}>3</div>
                            <div className={(currentPage === 3) ? classSelect : classNoSelect} onClick={() => setCurrentPage(3)}>4</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages === 5) ?
                        <div className="flex flex-row">
                            <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                            <div className={(currentPage === 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(1)}>2</div>
                            <div className={(currentPage === 2) ? classSelect : classNoSelect} onClick={() => setCurrentPage(2)}>3</div>
                            <div className={(currentPage === 3) ? classSelect : classNoSelect} onClick={() => setCurrentPage(3)}>4</div>
                            <div className={(currentPage === 4) ? classSelect : classNoSelect} onClick={() => setCurrentPage(4)}>5</div>
                        </div>
                        : ""
                    }
                    {
                        (totalPages > 5) ?
                        <div>
                            {
                                (currentPage < 2) ?
                                <div className="flex flex-row">
                                    <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                                    <div className={(currentPage === 1) ? classSelect : classNoSelect}  onClick={() => setCurrentPage(1)}>2</div>
                                    <div className={(currentPage === 2) ? classSelect : classNoSelect}  onClick={() => setCurrentPage(2)}>3</div>
                                    <div className={(currentPage === 3) ? classSelect : classNoSelect}  onClick={() => setCurrentPage(3)}>4</div>
                                    <div className={(currentPage === totalPages - 1) ? classSelect : classNoSelect}  onClick={() => setCurrentPage(totalPages - 1)}>{totalPages}</div>
                                </div>
                                : ""
                            }
                            {
                                (currentPage >= 2 && (currentPage < totalPages - 2) ) ?
                                <div className="flex flex-row">
                                    <div className={(currentPage === 0) ? classSelect : classNoSelect} onClick={() => setCurrentPage(0)}>1</div>
                                    <div className={(currentPage === currentPage - 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(currentPage - 1)}>{currentPage}</div>
                                    <div className={(currentPage === currentPage) ? classSelect : classNoSelect} onClick={() => setCurrentPage(currentPage)}>{currentPage + 1}</div>
                                    <div className={(currentPage === currentPage + 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 2}</div>
                                    <div className={(currentPage === totalPages - 1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(totalPages - 1)}>{totalPages}</div>
                                </div>
                                : ""
                            }
                            {
                                (currentPage >= totalPages -2 ) ?
                                <div className="flex flex-row">
                                    <div className={(currentPage === 0) ? classSelect : classNoSelect} >1</div>
                                    <div className={(currentPage === totalPages - 3) ? classSelect : classNoSelect} onClick={() => setCurrentPage(totalPages - 3)}>{totalPages - 2}</div>
                                    <div className={(currentPage === totalPages -2 ) ? classSelect : classNoSelect} onClick={() => setCurrentPage(totalPages - 2)}>{totalPages -1 }</div>
                                    <div className={(currentPage === totalPages -1) ? classSelect : classNoSelect} onClick={() => setCurrentPage(totalPages - 1)}>{totalPages}</div>
                                </div>
                                : ""
                            }
                        </div>
                        : ""
                    }
                    <div className="ml2 custom-gray pointer" onClick={() => handleNext()}>Next</div>
                </div>
            </div>
        </div>
    )
}

export default PaginationBar;
