import React, { useState } from 'react'
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';

const DataIndex = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const [currentRecords, setCurrentRecords] = useState(props.myData.slice(indexOfFirstRecord, indexOfLastRecord));
    const [nPages, setnPages] = useState(Math.ceil(props.myData.length / recordsPerPage));

    return (
        <div>
            {currentRecords === undefined || 
             currentRecords.length == 0 
             ? <p>You currently do not have any {props.type} recs saved.</p>
             :  currentRecords.map(
                (d) => 
                    <Card   title={props.type == 'recipe' ? d.recipeName : d.name}
                            data={d}
                            setMyViewingData = {props.setMyViewingData}
                    />
            )}
            {props.myData >= recordsPerPage ?
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setCurrentRecords={setCurrentRecords}
                recipes={props.myData}
                indexOfFirstRecord={indexOfFirstRecord}
                indexOfLastRecord={indexOfLastRecord}
            
            />
            :
            null}
        </div>
    )
}

export default DataIndex