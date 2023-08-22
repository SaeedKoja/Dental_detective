import React, { useCallback } from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import user from '../../assets/images/7309681.jpg';
import email from '../../assets/icons/mail.png';
import tel from '../../assets/icons/phone-call.png';
import img from '../../assets/images/photo_2023-08-18_14-04-18.jpg';
import location from '../../assets/icons/location.png';
import edit from '../../assets/icons/pencil.png';
import ProductBox from '../../components/productBox';
import DeleteItem from '../../components/DeleteItem';
import { useState } from 'react';
import ProfileForm from '../../components/ProfileForm';
import { useRef } from 'react';
import UseAxiosGet from '../../hooks/useAxiosGet';
import { API } from '../../data/config';
import axios from 'axios';
import Cookies from 'js-cookie';
import AddCaseForm from '../../components/AddCaseForm';

const Portfolio = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [del, setDel] = useState();
    const [editProfile, setEditProfile] = useState();
    const [fetchAgain, setFetchAgain] = useState(false);
    const [clientId, setClientId] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [portfolio, setPortfolio] = useState("")
    const [cases, setCases] = useState([])
    const [address, setAddress] = useState("")


    const fetchHandler = useCallback(() => {
        axios
            .get(`${API.Dentallabs.GET_PORTFOLIO}/${Cookies.get("id")}`)
            .then((res) => {
                console.log(res.data)
                setPortfolio(res.data.dentallab)
                setCases(res.data.dentallab.images)
                if (res.data.dentallab.addresses.length !== 0) setAddress(res.data.dentallab.addresses[0].city)
            });
    }, []);

    useEffect(() => {
        fetchHandler();
    }, [fetchHandler, fetchAgain]);

    const confrimHandler = () => {
    };

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const deleteClientHandler = (id) => {
        setClientId(id);
        setDel(true);
    };

    const editBackHandler = () => {
        setEditProfile(false)
        setFetchAgain(!fetchAgain)
    }

    const editHandler = () => {
        setEditProfile({
            phone: portfolio?.phone,
            location: address
        });
    };

    const addCaseHandler = () => {
        setShowAddForm(true)
    }


    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Portfolio'))
    }, [])

    return (
        <div className='pl-[300px] pr-5 py-5 text-[var(--dark-color)]' ref={pageRef}>
            {del && (
                <DeleteItem onConfrim={confrimHandler} onBack={() => setDel(false)} />
            )}
            {showAddForm && (
                <AddCaseForm goBackHandler={() => setShowAddForm(false)} />
            )}
            {editProfile && (
                <ProfileForm
                    profileData={editProfile}
                    goBackHandler={editBackHandler}
                />
            )}
            <div className='text-[dark-color] w-12 h-12 rounded-full flex justify-center items-center text-3xl bg-[var(--border-color)] cursor-pointer fixed bottom-20 right-20' onClick={addCaseHandler}>+</div>
            <div className='flex justify-center items-center relative'>
                {/* <div className='h-[290px] w-[100%] absolute top-0 bg-[var(--border-color)] rounded-2xl'></div> */}
                {/* <img src={img} className='h-[290px] w-[100%] absolute top-0 object-cover rounded-lg shadow-md' /> */}
                <div
                    className='w-[600px] bg-white m-4 p-4 relative rounded-lg shadow-md'>
                    <div className='flex items-center'>
                        <img src={user} className='w-[65px] h-[65px] mr-8 rounded-full' alt='' />
                        <div>
                            <p className='text-2xl mb-2 font-bold'>{portfolio?.name}</p>
                            <div className="rate flex">
                                <box-icon
                                    type="solid"
                                    color="var(--blue-color)"
                                    name="star"
                                ></box-icon>
                                <box-icon
                                    type="solid"
                                    color="var(--blue-color)"
                                    name="star"
                                ></box-icon>
                                <box-icon
                                    type="solid"
                                    color="var(--blue-color)"
                                    name="star"
                                ></box-icon>
                                <box-icon
                                    type="solid"
                                    color="var(--blue-color)"
                                    name="star"
                                ></box-icon>
                                <box-icon
                                    name="star-half"
                                    color="var(--blue-color)"
                                    type="solid"
                                ></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mt-8'>
                        <img src={email} className='w-[25px] mr-3' alt='' />
                        <p className='font-light text-lg'>{portfolio?.email}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img src={tel} className='w-[25px] mr-3' alt='' />
                        <p className='font-light text-lg'>{portfolio?.phone}</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img src={location} className='w-[25px] mr-3' alt='' />
                        <p className='font-light text-lg'>{address}</p>
                    </div>
                    <div onClick={editHandler} className='w-[50px] flex justify-center rounded-2xl border-[1px] border-[var(--dark-color)] items-center h-[50px] bg-[var(--background-color)] absolute right-5 bottom-6 cursor-pointer'>
                        <img src={edit} className='w-[30px]' alt='' />
                    </div>
                </div>
                {/* <img src={img} className='h-[242px] rounded-lg shadow-md' /> */}
                {/* <img src={user} className='w-[20%]' /> */}
            </div>
            <div className='mt-12'>
                <div className='flex justify-evenly items-center mb-12'>
                    <p className='text-3xl font-bold'>Cases</p>
                    <div className='w-[80%] border-b-[1px] border-[var(--border-color)]'></div>
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
                    {cases.map((item, index) => {
                        return (
                            <ProductBox item={item} key={index} onDelete={deleteClientHandler} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
