import React from 'react';
import CaseBox from './CaseBox';
import NotesForm from './NotesForm';
import { useState } from 'react';

const Refuzed = () => {
    const [showNotes, setShowNotes] = useState(false);

    const data = [
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
    ]

    const showNotesHandler = (item) => {
        setShowNotes(item);
    };

    return (
        <div>
            {showNotes && (
                <NotesForm
                    item={showNotes}
                    goBackHandler={()=>setShowNotes(false)}
                />
            )}
              {data.map((item, index) => {
                return (
                    <CaseBox item={item} onShowNotes={showNotesHandler} key={index} page={4} />
                )
            })}
        </div>
    );
}

export default Refuzed;
