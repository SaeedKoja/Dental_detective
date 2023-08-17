import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';

const Clients = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(activeAction.replaceActiveState('Clients'))
    },[])

    return (
        <div className='pl-[260px]'>
            Clients
        </div>
    );
}

export default Clients;
