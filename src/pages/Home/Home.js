import React, { useState } from 'react';
import './Home.css';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import Refuzed from '../../components/Refuzed';
import Requested from '../../components/Requested';
import Approved from '../../components/Approved';
import UnderTrial from '../../components/UnderTrial';
import { useRef } from 'react';
import DetailsForm from '../../components/DetailsForm';


const Home = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [activePage, setActivePage] = useState("Approved")
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
      }, []);

    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Home'))
    }, [])

    const searchHandler = (e) => {}

    const showDetailsHandler = (item) => {
        setShowDetails(item)
    }

    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            {showDetails && (
                <DetailsForm
                    item={showDetails}
                    goBackHandler={()=>setShowDetails(false)}
                />
            )}
            <div className="home w-[100%] m-auto h-[40px] rounded-full bg-[var(--blue-color)] border border-[var(--blue-color)] mt-4 flex justify-center items-center">
                <ul className="flex justify-between items-center w-[100%] mx-auto">
                    <li
                        className={activePage === "Approved" ? "active" : "unactive"}
                        onClick={() => setActivePage("Approved")}
                    >
                        Approved
                    </li>
                    <li
                        className={activePage === "In progress" ? "active" : "unactive"}
                        onClick={() => setActivePage("In progress")}
                    >
                        In progress
                    </li>
                    <li
                        className={activePage === "Requested" ? "active" : "unactive"}
                        onClick={() => setActivePage("Requested")}
                    >
                        Requested
                    </li>
                    <li
                        className={activePage === "Refuzed" ? "active" : "unactive"}
                        onClick={() => setActivePage("Refuzed")}
                    >
                        Refuzed
                    </li>
                </ul>
            </div>
            <div className='mb-16 mt-9 w-[900px] flex justify-between items-center '>
                <p className='text-[var(--blak-color)] text-4xl font-bold'>{activePage} forms</p>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="search for a specific form"
                        className="shadow-md w-[500px] border border-[var(--gray-color)] rounded-l-full rounded-r-full py-2 pr-2 pl-12 bg-inherit"
                        name="searsh"
                        onChange={searchHandler}
                    />
                    <div className="absolute top-[10px] left-4 opacity-[0.6]">
                        <box-icon name="search" color="var(--gray-color)"></box-icon>
                    </div>
                </div>
            </div>
            {activePage === "Approved" && <Approved onShowDetails={showDetailsHandler}/>}
            {activePage === "In progress" && <UnderTrial />}
            {activePage === "Requested" && <Requested />}
            {activePage === "Refuzed" && <Refuzed />}
        </div>
    );
}

export default Home;
