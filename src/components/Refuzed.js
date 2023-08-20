import React from 'react';
import CaseBox from './CaseBox';
import NotesForm from './NotesForm';
import { useState } from 'react';
import { API } from '../data/config';
import UseAxiosGet from '../hooks/useAxiosGet';

const Refuzed = () => {
    const [showNotes, setShowNotes] = useState(false);
    const { data:refuzedForms } = UseAxiosGet(API.Dentallabs.GET_REFUZED)

    console.log(refuzedForms)

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
              {refuzedForms && refuzedForms.data.map((item, index) => {
                return (
                    <CaseBox item={item} onShowNotes={showNotesHandler} key={index} page={4} />
                )
            })}
        </div>
    );
}

export default Refuzed;
