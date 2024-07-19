import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage, setCurrentRecords, recipes, indexOfFirstRecord, indexOfLastRecord }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    // const goToPage = (pgNumber) => {
    //     setCurrentPage(pgNumber);
    //     setCurrentRecords(recipes.slice(indexOfFirstRecord, indexOfLastRecord));

    // }
    const goToNextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1);
        setCurrentRecords(recipes.slice(indexOfFirstRecord, indexOfLastRecord));
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1);
        setCurrentRecords(recipes.slice(indexOfFirstRecord, indexOfLastRecord));
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <span className="mr-5">
                    <a className="page-link" 
                        onClick={goToPrevPage} 
                        href='#'>
                        Previous
                    </a>
                </span>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className='inline  p-2 '>
                        <a 
                            // onClick={goToPage}  
                            className='page-link' 
                            href='#'>
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <span className="ml-5">
                    <a className="page-link" 
                        onClick={goToNextPage}
                        href='#'>
                        Next
                    </a>
                </span>
            </ul>
        </nav>
    )
}

export default Pagination;