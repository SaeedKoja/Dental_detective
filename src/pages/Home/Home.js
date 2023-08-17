import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Home'))
    }, [])

    return (
        <div className='pl-[260px]'>
            Home
        </div>
    );
}

export default Home;
