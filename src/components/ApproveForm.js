import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ApproveForm = ({item,goBackHandler}) => {
    const [price, setPrice] = useState("")
    const [maxDate, setMaxDate] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div
            style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
            className="fixed w-[100%] h-[100vh] top-0 right-0 z-[10000] flex justify-center items-center"
        >
            <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto pt-11 px-8 bg-[var(--background-color)]">
                <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                name='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                            <label className="top-top">Price</label>
                        </div>
                        <div className="child">
                            <DatePicker
                                dateFormat="yyyy/MM/dd"
                                name="maxDate"
                                isClearable
                                selected={maxDate}
                                onChange={(e) => setMaxDate(e)
                                }
                            />
                            <label className="top-top">Address</label>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="w-[31%] flex justify-between items-center mb-8 mt-5">
                            <button
                                type="submit"
                                className={`py-[9px] text-[var(--ligth-color)] px-[30px] font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg`}
                            >
                                Submit
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

export default ApproveForm;
