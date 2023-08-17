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
        <div className='pl-[260px]'>
            Complaints
        </div>
    );
}

export default Complaints;
