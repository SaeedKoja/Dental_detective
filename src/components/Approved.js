import React from 'react';
import CaseBox from './CaseBox';
import UseAxiosGet from '../hooks/useAxiosGet';
import { API } from '../data/config';

const Approved = ({onShowDetails}) => {
    const {data} = UseAxiosGet(API.Dentallabs.GET_APPROVED)

    console.log(data?.orders)

  

    return (
        <div>
            {/* {data.map((item, index) => {
                return (
                    <CaseBox item={item} key={index} page={1} onShowDetails={onShowDetails}/>
            )
            })} */}
        </div>
    );
}

export default Approved;
