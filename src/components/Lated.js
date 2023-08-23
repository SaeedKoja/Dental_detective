import React, { useEffect } from 'react';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';
import Cookies from 'js-cookie';
import CaseBox from './CaseBox';

const Lated = ({ onShowDetails, setForms, setFactData, forms }) => {
    const { data } = UseAxiosGet(`${API.Dentallabs.GET_LATED}/${Cookies.get("id")}`)

    useEffect(() => {
        if (!data) return
        setForms(data.data)
        setFactData(data.data)
    }, [data])

    useEffect(() => {
        setForms([])
    }, []);
    console.log(data)

    return (
        <div>
            {forms && forms.map((item, index) => {
                return (
                    <CaseBox item={item} onShowDetails={onShowDetails} key={index} page={5} />
                )
            })}
        </div>
    );
}

export default Lated;
