import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import { useState } from 'react';
import ClientBox from '../../components/ClientBox';
import { useRef } from 'react';
import UseAxiosGet from '../../hooks/useAxiosGet';
import { API } from '../../data/config';

const Clients = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [dentists, setDentists] = useState([])
    const [factData, setFactData] = useState([])
    const { data } = UseAxiosGet(API.Dentallabs.GET_DENTIST)

    useEffect(() => {
        if (!data) return
        setDentists(data.dentists)
        setFactData(data.dentists)
    }, [data])

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);


    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Clients'))
    }, [])

    const searchHandler = (e) => {
        let searchQuery = e.target.value;
        let resultSearch = factData?.filter((complaint) => {
            return (
                complaint.name.includes(searchQuery) ||
                complaint.email.includes(searchQuery) ||
                complaint.phone.includes(searchQuery)
            );
        });
        if (searchQuery === "") {
            setDentists(factData);
        } else {
            setDentists(resultSearch);
        }
    };

    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            <div className='mb-16 w-[900px] flex justify-between items-center '>
                <p className='text-[var(--blak-color)] text-4xl font-bold'>Clients</p>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="search for a specific client"
                        className="shadow-md w-[500px] border border-[var(--gray-color)] rounded-l-full rounded-r-full py-2 pr-2 pl-12 bg-inherit"
                        name="searsh"
                        onChange={searchHandler}
                    />
                    <div className="absolute top-[10px] left-4 opacity-[0.6]">
                        <box-icon name="search" color="var(--gray-color)"></box-icon>
                    </div>
                </div>
            </div>
            <div
                className="mx-20"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: "30px",
                    margin: "auto",
                    maxWidth: "100%",
                }}
            >
                {dentists.map((item, index) => {
                    return (
                        <ClientBox item={item} key={index} />
                    )
                })}
            </div>
        </div>
    );
}

export default Clients;
