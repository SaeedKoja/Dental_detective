import React from 'react';
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

const Portfolio = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [del, setDel] = useState();
    const [editProfile, setEditProfile] = useState();
    const [fetchAgain, setFetchAgain] = useState(false);
    const [clientId, setClientId] = useState("");

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
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const data = [
        {
            kind: 'Kind of case',
            photo: user,
        },
        {
            kind: 'Kind of case',
            photo: user,
        },
        {
            kind: 'Kind of case',
            photo: user,
        },
        {
            kind: 'Kind of case',
            photo: user,
        },
        {
            kind: 'Kind of case',
            photo: user,
        },
    ]

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
            location: 'damascus - syria',
            phone: '0936286430'
        });
    };


    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Portfolio'))
    }, [])

    return (
        <div className='pl-[300px] pr-5 py-5 text-[var(--dark-color)]' ref={pageRef}>
            {del && (
                <DeleteItem onConfrim={confrimHandler} onBack={() => setDel(false)} />
            )}
            {editProfile && (
                <ProfileForm
                    profileData={editProfile}
                    goBackHandler={editBackHandler}
                />
            )}
            <div className='flex justify-center items-center relative'>
                {/* <div className='h-[290px] w-[100%] absolute top-0 bg-[var(--border-color)] rounded-2xl'></div> */}
                {/* <img src={img} className='h-[290px] w-[100%] absolute top-0 object-cover rounded-lg shadow-md' /> */}
                <div
                    className='w-[600px] bg-white m-4 p-4 relative rounded-lg shadow-md'>
                    <div className='flex items-center'>
                        <img src={user} className='w-[65px] h-[65px] mr-8 rounded-full' />
                        <div>
                            <p className='text-2xl mb-2 font-bold'>Saeed Koja</p>
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
                        <img src={email} className='w-[25px] mr-3' />
                        <p className='font-light text-lg'>labratoryemail@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img src={tel} className='w-[25px] mr-3' />
                        <p className='font-light text-lg'>0936286430</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <img src={location} className='w-[25px] mr-3' />
                        <p className='font-light text-lg'>damascus - syria</p>
                    </div>
                    <div onClick={editHandler} className='w-[50px] flex justify-center rounded-2xl border-[1px] border-[var(--dark-color)] items-center h-[50px] bg-[var(--background-color)] absolute right-5 bottom-6 cursor-pointer'>
                        <img src={edit} className='w-[30px]' />
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
                    {data.map((item, index) => {
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
