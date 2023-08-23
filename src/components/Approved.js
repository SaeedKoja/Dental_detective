import React from 'react';
import CaseBox from './CaseBox';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const Approved = ({ onShowDetails, setForms, setFactData, forms, fetchAgain, setFetchAgain }) => {
    const { data } = UseAxiosGet(`${API.Dentallabs.GET_APPROVED}/${Cookies.get("id")}`)

    useEffect(() => {
        if (!data) return
        setForms(data.orders)
        setFactData(data.orders)
    }, [data])

    useEffect(() => {
        setForms([])
    }, []);

    const completeHandler = (id) => {
        setForms(forms.filter((array) => +array.id !== +id))
        setFetchAgain(!fetchAgain)
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
