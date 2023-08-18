import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';

const Portfolio = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(activeAction.replaceActiveState('Portfolio'))
    },[])

    return (
        <div className='pl-[300px] pr-5 py-5'>
            Portfolio
        </div>
    );
}

export default Portfolio;
