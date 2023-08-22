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

const Clients = () => {
    const dispatch = useDispatch();
    const [del, setDel] = useState();
    const pageRef = useRef(null);
    const [clientId, setClientId] = useState("");
    const [dentist, setDentist] = useState([])
    const [factData, setFactData] = useState([])
    const { data } = UseAxiosGet(API.Dentallabs.GET_DENTIST)

    useEffect(() => {
        if (!data) return
        console.log(data)
        setDentist(data.dentists)
        setFactData(data.dentists)
    }, [data])

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const deleteClientHandler = (id) => {
        setClientId(id);
        setDel(true);
    };

    const confrimHandler = () => {
        // axios
        //     .delete(`${API.consultations.CONSULTATIONS}${conId}`, {
        //         headers: {
        //             Authorization: "JWT " + Cookies.get("accessToken")
        //         }
        //     })
        //     .then((res) => {
        //         console.log(res);
        //         setDel(false);
        //         setConsultations((prev) => {
        //             return {
        //                 ...prev,
        //                 count: consultations.count - 1,
        //                 pending_count: isPending
        //                     ? consultations.pending_count - 1
        //                     : consultations.pending,
        //                 data: consultations.data.filter((array) => array.id !== conId)
        //             };
        //         });
        //     });
    };


    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Clients'))
    }, [])

    const searchHandler = (e) => {

    }

    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            {del && (
                <DeleteItem onConfrim={confrimHandler} onBack={() => setDel(false)} />
            )}
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
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "30px",
                    margin: "auto",
                    maxWidth: "100%",
                }}
            >
                {dentist.map((doctor, index) => {
                    return (
                        <ClientBox doctor={doctor} key={index} onDelete={deleteClientHandler} />
                    )
                })}
                {/* <div className='relative'>
                    <div className='client flex flex-col items-center py-4 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]'>
                        <img className='w-[30px] mb-7' src={user}></img>
                        <p className='text-xl font-bold text-[var(--dark-color)]'>Doctor Name</p>
                        <p className='font-light text-[var(--border-color)]'>Docto2001@gmail.com</p>
                        <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                            <img className='w-[20px] mr-3' src={location}></img>
                            <p className='text-[var(--dark-color)]'>damascus - syria</p>
                        </div>
                            <div className='flex items-center'>
                                <img className='w-[20px] mr-3' src={tel}></img>
                                <p className='text-[var(--dark-color)]'>0936286430</p>
                            </div></div>
                        <img className='w-[30px] mt-7 cursor-pointer' onClick={() => deleteClientHandler(3)} src={cancel}></img>
                    </div>
                </div>
                <div className='relative'>
                    <div className='client flex flex-col items-center py-4 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]'>
                        <img className='w-[30px] mb-7' src={user}></img>
                        <p className='text-xl font-bold text-[var(--dark-color)]'>Doctor Name</p>
                        <p className='font-light text-[var(--border-color)]'>Docto2001@gmail.com</p>
                        <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                            <img className='w-[20px] mr-3' src={location}></img>
                            <p className='text-[var(--blue-color)]'>damascus - syria</p>
                        </div>
                            <div className='flex items-center'>
                                <img className='w-[20px] mr-3' src={tel}></img>
                                <p className='text-[var(--blue-color)]'>0936286430</p>
                            </div></div>
                        <img className='w-[30px] mt-7 cursor-pointer' onClick={() => deleteClientHandler(3)} src={cancel}></img>
                    </div>
                </div>
                <div className='relative'>
                    <div className='client flex flex-col items-center py-4 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]'>
                        <img className='w-[30px] mb-7' src={user}></img>
                        <p className='text-xl font-bold text-[var(--dark-color)]'>Doctor Name</p>
                        <p className='font-light text-[var(--border-color)]'>Docto2001@gmail.com</p>
                        <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                            <img className='w-[20px] mr-3' src={location}></img>
                            <p className='text-[var(--blue-color)]'>damascus - syria</p>
                        </div>
                            <div className='flex items-center'>
                                <img className='w-[20px] mr-3' src={tel}></img>
                                <p className='text-[var(--blue-color)]'>0936286430</p>
                            </div></div>
                        <img className='w-[30px] mt-7 cursor-pointer' onClick={() => deleteClientHandler(3)} src={cancel}></img>
                    </div>
                </div>
                <div className='relative'>
                    <div className='client flex flex-col items-center py-4 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]'>
                        <img className='w-[30px] mb-7' src={user}></img>
                        <p className='text-xl font-bold text-[var(--dark-color)]'>Doctor Name</p>
                        <p className='font-light text-[var(--border-color)]'>Docto2001@gmail.com</p>
                        <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                            <img className='w-[20px] mr-3' src={location}></img>
                            <p className='text-[var(--blue-color)]'>damascus - syria</p>
                        </div>
                            <div className='flex items-center'>
                                <img className='w-[20px] mr-3' src={tel}></img>
                                <p className='text-[var(--blue-color)]'>0936286430</p>
                            </div></div>
                        <img className='w-[30px] mt-7 cursor-pointer' onClick={() => deleteClientHandler(3)} src={cancel}></img>
                    </div>
                </div>
                <div className='relative'>
                    <div className='client flex flex-col items-center py-4 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]'>
                        <img className='w-[30px] mb-7' src={user}></img>
                        <p className='text-xl font-bold text-[var(--dark-color)]'>Doctor Name</p>
                        <p className='font-light text-[var(--border-color)]'>Docto2001@gmail.com</p>
                        <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                            <img className='w-[20px] mr-3' src={location}></img>
                            <p className='text-[var(--blue-color)]'>damascus - syria</p>
                        </div>
                            <div className='flex items-center'>
                                <img className='w-[20px] mr-3' src={tel}></img>
                                <p className='text-[var(--blue-color)]'>0936286430</p>
                            </div></div>
                        <img className='w-[30px] mt-7 cursor-pointer' onClick={() => deleteClientHandler(3)} src={cancel}></img>
                    </div>
                </div>
                <div className='relative'>
                    <div className='client flex flex-col items-center py-4 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]'>
                        <img className='w-[30px] mb-7' src={user}></img>
                        <p className='text-xl font-bold text-[var(--dark-color)]'>Doctor Name</p>
                        <p className='font-light text-[var(--border-color)]'>Docto2001@gmail.com</p>
                        <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                            <img className='w-[20px] mr-3' src={location}></img>
                            <p className='text-[var(--blue-color)]'>damascus - syria</p>
                        </div>
                            <div className='flex items-center'>
                                <img className='w-[20px] mr-3' src={tel}></img>
                                <p className='text-[var(--blue-color)]'>0936286430</p>
                            </div></div>
                        <img className='w-[30px] mt-7 cursor-pointer' onClick={() => deleteClientHandler(3)} src={cancel}></img>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Clients;
