import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailsForm = ({ item, goBackHandler }) => {

    return (
        <div
            style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
            className="fixed w-[100%] h-[100vh] top-0 right-0 z-[10000] flex justify-center items-center"
        >
            <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto pt-11 px-8 bg-[var(--background-color)]">
                <form className="flex flex-col w-[100%]">
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                name='doctor'
                                value={item.dentist.name}
                                readOnly
                            />
                            <label className="top-top">Doctor name</label>
                        </div>
                        <div className="child">
                            <input
                                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                name='patient'
                                value={item.patient.name}
                                readOnly
                            />
                            <label className="top-top">Patient name</label>
                        </div>
                    </div>
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                value={item.work_type.name}
                                readOnly
                            />
                            <label className="top-top">Work type</label>
                        </div>
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                value={item.patient.gender}
                                readOnly
                            />
                            <label className="top-top">Gender</label>
                        </div>
                        <div className="child">
                            <input
                                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                value={item.patient.age}
                                readOnly
                            />
                            <label className="top-top">Age</label>
                        </div>
                    </div>
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                value={item.Max_Data}
                                readOnly
                            />
                            <label className="top-top">Max date</label>
                        </div>
                        <div className="child">
                            <input
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                value={item.teeth_color.name}
                                readOnly
                            />
                            <label className="top-top">Teeth color</label>
                        </div>
                        <div className="child">
                            <input
                                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                value={item.teeth_type.name}
                                readOnly
                            />
                            <label className="top-top">Teeth type</label>
                        </div>
                    </div>
                    <div className="child">
                        <textarea
                            className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                            type="text"
                            style={{ height: "130px", padding: "15px" }}
                            value={item.notes}
                            readOnly
                        />
                        <label className="top-top">Extra notes</label>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="w-[15%] flex justify-between items-center mb-8 mt-5">
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

export default DetailsForm;
