import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteItem from '../../components/DeleteItem';
import ClientBox from '../../components/ClientBox';
import { useRef } from 'react';
import UseAxiosGet from '../../hooks/useAxiosGet';
import { API } from '../../data/config';
import axios from 'axios';
import Cookies from 'js-cookie';

const Complaints = () => {
    const dispatch = useDispatch();
    const [del, setDel] = useState();
    const pageRef = useRef(null);
    const [clientId, setClientId] = useState("");
    const [complaints, setComplaints] = useState([])
    const [factData, setFactData] = useState([])
    const { data } = UseAxiosGet(`${API.Dentallabs.GET_COMPLAINTS}/${Cookies.get("id")}`)

    useEffect(() => {
        if (!data) return
        console.log(data)
        setComplaints(data.complaints)
        setFactData(data.complaints)
    }, [data])

    const deleteClientHandler = (id) => {
        setClientId(id);
        setDel(true);
    };

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const confrimHandler = () => {
        axios
            .delete(`${API.Dentallabs.DELETE_COMPLAINTS}/${clientId}`)
            .then((res) => {
                setDel(false);
                setComplaints(complaints.filter((array) => +array.id !== +clientId));
                setFactData(complaints.filter((array) => +array.id !== +clientId));
            });
    };

    console.log(complaints)


    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Complaints'))
    }, [])

    const searchHandler = (e) => {
        let searchQuery = e.target.value;
        let resultSearch = factData?.filter((complaint) => {
            return (
                complaint.dentist.name.includes(searchQuery) ||
                complaint.dentist.email.includes(searchQuery) ||
                complaint.dentist.phone.includes(searchQuery) ||
                complaint.complaint.includes(searchQuery)
            );
        });
        if (searchQuery === "") {
            setComplaints(factData);
        } else {
            setComplaints(resultSearch);
        }
    };

    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            {del && (
                <DeleteItem onConfrim={confrimHandler} onBack={() => setDel(false)} />
            )}
            <div className='mb-16 flex justify-between items-center '>
                <p className='text-[var(--blak-color)] text-4xl font-bold'>Complaints from clients</p>
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
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "30px",
                    margin: "auto",
                    maxWidth: "100%",
                }}
            >
                {complaints.map((item, index) => {
                    return (
                        <ClientBox page='complaints' item={item} key={index} onDelete={deleteClientHandler} />
                    )
                })}
            </div>
        </div>
    );
}

export default Complaints;
