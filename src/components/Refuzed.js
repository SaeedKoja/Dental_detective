import React, { useEffect } from 'react';
import CaseBox from './CaseBox';
import NotesForm from './NotesForm';
import { useState } from 'react';
import { API } from '../data/config';
import UseAxiosGet from '../hooks/useAxiosGet';
import Cookies from 'js-cookie';

const Refuzed = ({ onShowDetails, setForms ,setFactData ,forms}) => {
    const [showNotes, setShowNotes] = useState(false);
    const { data } = UseAxiosGet(`${API.Dentallabs.GET_REFUZED}/${Cookies.get("id")}`)


    const showNotesHandler = (item) => {
        setShowNotes(item);
    };

    useEffect(() => {
        if (!data) return
        setForms(data.data)
        setFactData(data.data)
    }, [data])

    const completeHandler = (id) => {
        // setRefuzedForms(refuzedForms.filter((array) => +array.id !== +id))
        setForms(forms.filter((array) => +array.id !== +id))
        setFactData(forms.filter((array) => +array.id !== +id))
    }

    useEffect(() => {
        setForms([])
    }, []);

    return (
        <div>
            {showNotes && (
                <NotesForm
                    item={showNotes}
                    goBackHandler={() => setShowNotes(false)}
                />
            )}
            {forms && forms.map((item, index) => {
                return (
                    <CaseBox onComplete={completeHandler} item={item} onShowNotes={showNotesHandler} onShowDetails={onShowDetails} key={index} page={4} />
                )
            })}
        </div>
    );
}

export default Refuzed;
