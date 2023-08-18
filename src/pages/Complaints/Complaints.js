import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';

const Complaints = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(activeAction.replaceActiveState('Complaints'))
    },[])

    return (
        <div className='pl-[300px] pr-5 py-5'>
            Complaints
        </div>
    );
}

export default Complaints;
