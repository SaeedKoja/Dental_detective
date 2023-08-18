import React from 'react';

const NotesForm = ({ item, goBackHandler }) => {
    return (
        <div
            style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
            className="fixed w-[100%] h-[100vh] top-0 right-0 z-[10000] flex justify-center items-center"
        >
            <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto pt-11 px-8 bg-[var(--background-color)]">
                <form className="flex flex-col w-[100%]">
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="child">
                            <textarea
                                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg px-4 w-[49%]"
                                style={{height:"150px",padding:"15px 10px"}}
                                type="text"
                                value={item}
                                readOnly
                            />
                            <label className="top-top">Notes</label>
                        </div>
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

export default NotesForm;
