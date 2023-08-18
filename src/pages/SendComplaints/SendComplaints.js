import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const SendComplaints = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);
    const [message, setMessage] = useState('')

    useEffect(() => {
        dispatch(activeAction.replaceActiveState('SendComplaints'))
    }, [])

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='pl-[220px]' ref={pageRef}>
            <div className='text-[var(--ligth-color)] relative w-[100%] h-[100vh] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${require("../../assets/images/photo_2023-08-18_14-04-18.jpg")})` }}>
                <div className="z-40 w-[400px] h-[360px] rounded-2xl bg-[var(--blue-color)] absolute left-[10%] top-8 p-4">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-3xl font-bold">Complaint to admin</h1>
                        <hr className="mt-2 mb-14 w-[50%]"></hr>
                    </div>
                    <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
                        <div className="w-[100%] relative mb-5">
                            <textarea
                                className="h-[100px] bg-[var(--background-color)] border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your message"
                                required
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-[31%] flex justify-between items-center mt-7">
                                <button
                                    type="submit"
                                    className={`"w-[105px]" py-[9px] text-[var(--p-color)] px-[30px] font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg`}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SendComplaints;
