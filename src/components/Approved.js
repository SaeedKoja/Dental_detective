import React from 'react';
import CaseBox from './CaseBox';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';
import { useEffect } from 'react';
import { useState } from 'react';

const Approved = ({ onShowDetails, setForms, setFactData, forms }) => {
    const { data } = UseAxiosGet(API.Dentallabs.GET_APPROVED)
    // const [approvedForms, setApprovedForms] = useState([])

    useEffect(() => {
        if (!data) return
        // setApprovedForms(data.orders)
        setForms(data.orders)
        setFactData(data.orders)
    }, [data])

    useEffect(() => {
        setForms([])
    }, []);

    const completeHandler = (id) => {
        setForms(forms.filter((array) => +array.id !== +id))
    }

    return (
        <div>
            {forms && forms.map((item, index) => {
                return (
                    <CaseBox onComplete={completeHandler} item={item} key={index} page={1} onShowDetails={onShowDetails} />
                )
            })}
        </div>
    );
}

export default Approved;
