import React, { useEffect } from 'react';
import CaseBox from './CaseBox';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';
import Cookies from 'js-cookie';

const UnderTrial = ({ onShowDetails, setForms, setFactData, forms }) => {
    const { data } = UseAxiosGet(`${API.Dentallabs.GET_IN_PROGRESS}/${Cookies.get("id")}`)

    useEffect(() => {
        if (!data) return
        setForms(data.data)
        setFactData(data.data)
    }, [data])

    useEffect(() => {
        setForms([])
    }, []);

    return (
        <div>
            {forms && forms.map((item, index) => {
                return (
                    <CaseBox item={item} onShowDetails={onShowDetails} key={index} page={2} />
                )
            })}
        </div>
    );
}

export default UnderTrial;
