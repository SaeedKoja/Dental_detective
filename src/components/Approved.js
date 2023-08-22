import React from 'react';
import CaseBox from './CaseBox';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';
import { useEffect } from 'react';
import { useState } from 'react';

const Approved = ({ onShowDetails }) => {
    const { data } = UseAxiosGet(API.Dentallabs.GET_APPROVED)
    const [approvedForms, setApprovedForms] = useState([])

    useEffect(() => {
        if (!data) return
        setApprovedForms(data.orders)
    }, [data])
    console.log(approvedForms)

    const completeHandler = (id) => {
        setApprovedForms(approvedForms.filter((array) => +array.id !== +id))
    }

    return (
        <div>
            {approvedForms && approvedForms.map((item, index) => {
                return (
                    <CaseBox onComplete={completeHandler} item={item} key={index} page={1} onShowDetails={onShowDetails} />
                )
            })}
        </div>
    );
}

export default Approved;
