import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { API } from '../data/config';
import swal from 'sweetalert';
import Cookies from 'js-cookie';

const ProfileForm = ({ goBackHandler, profileData }) => {
    const [phone, setPhone] = useState(profileData.phone)
    const [location, setLocation] = useState(profileData.location)

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post(`${API.Dentallabs.EDIT_PORTFOLIO}/${Cookies.get("id")}`, { phone: phone, city: location })
            .then((res) => {
                swal({
                    title: `success`,
                    timer: 3000,
                    icon: "success"
                });
                setTimeout(() => {
                    goBackHandler()
                }, [3040]);
            })
            .catch((err) => {
                swal({
                    icon: "warning",
                    timer: 3000,
                    title: `${err.response.data.message}`
                });
            });
    }
    return (
        <div
            style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
            className="fixed w-[100%] h-[100vh] top-0 right-0 z-[10000] flex justify-center items-center"
        >
            <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto  px-8 bg-[var(--background-color)]">
                <p className="my-7 text-lg text-[var(--dark-color)]">
                    Edit profile information
                </p>
                <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <label className="top-top">Phone number</label>
                        </div>
                        <div className="child">
                            <input
                                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                name="location"
                                value={location}
                                onChange={(e) => { setLocation(e.target.value) }}
                                required
                            />
                            <label className="top-top">Address</label>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="w-[31%] flex justify-between items-center mb-8 mt-5">
                            <button
                                type="submit"
                                className={`w-[105px] py-[9px] text-[var(--ligth-color)] px-[30px] font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg`}
                            >
                                Edit
                            </button>
                            <button
                                onClick={goBackHandler}
                                className="border border-[var(--dark-color)] px-[30px] py-[8px] outline-none cursor-pointer font-bold rounded-lg text-[var(--dark-color)] "
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;
