import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import { useRef } from 'react';
import CaseBox from '../../components/CaseBox';
import { API } from '../../data/config';
import UseAxiosGet from '../../hooks/useAxiosGet';
import DetailsForm from '../../components/DetailsForm';
import Cookies from 'js-cookie';

const Archive = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [showDetails, setShowDetails] = useState(false)
    const [archiveForms, setArchiveForm] = useState(false)
    const [factData, setFactData] = useState(false)
    const { data } = UseAxiosGet(`${API.Dentallabs.GET_ARCHIVED}/${Cookies.get("id")}`)

    useEffect(() => {
        if (!data) return
        setArchiveForm(data.data)
        setFactData(data.data)
    }, [data])

    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Archive'))
    }, [])

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const searchHandler = (e) => {
        let searchQuery = e.target.value;
        let resultSearch = factData?.filter((form) => {
            return (
                form.Max_Data.includes(searchQuery) ||
                form.dentist.name.includes(searchQuery) ||
                form.patient.name.includes(searchQuery) ||
                form.status.name.includes(searchQuery)
            );
        });
        if (searchQuery === "") {
            setArchiveForm(factData);
        } else {
            setArchiveForm(resultSearch);
        }
    };

    const showDetailsHandler = (item) => {
        setShowDetails(item)
    }


    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            {showDetails && (
                <DetailsForm
                    item={showDetails}
                    goBackHandler={() => setShowDetails(false)}
                />
            )}
            <div className='mb-16 w-[900px] flex justify-between items-center '>
                <p className='text-[var(--blak-color)] text-4xl font-bold'>Archived forms</p>
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
            {archiveForms && archiveForms.map((item, index) => {
                return (
                    <CaseBox item={item} onShowDetails={showDetailsHandler} key={index} page={0} />
                )
            })}
        </div>
    );
}

export default Archive;
