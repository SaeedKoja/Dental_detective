import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';

const SendComplaints = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(activeAction.replaceActiveState('SendComplaints'))
    },[])

    return (
        <div className='pl-[300px] pr-5 py-5'>
            SendComplaints
        </div>
    );
}

export default SendComplaints;
