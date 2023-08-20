import React from 'react';
import CaseBox from './CaseBox';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';

const UnderTrial = () => {
    const { data:inProgressForms } = UseAxiosGet(API.Dentallabs.GET_IN_PROGRESS)

    return (
        <div>
            {inProgressForms && inProgressForms.data.map((item, index) => {
                return (
                    <CaseBox item={item} key={index} page={2}/>
            )
            })}
        </div>
    );
}

export default UnderTrial;
