import React from 'react';
import clock from '../assets/icons/clock.png';
import details from '../assets/icons/list.png';

const CaseBox = ({ item, page, onReject, onComplete, onApprove, onShowNotes }) => {
    return (
        <div className='relative text-sm'>
            <div className='form mb-5 bg-white flex justify-between border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]  items-center w-[100%] py-5 px-6 text-[var(--dark-color)]'>
                <p className='text-center w-[20%]'>{item.type}</p>
                <div className='w-[20%] flex justify-center items-center'>
                    <img className='w-[20px] mr-2' src={clock}></img>
                    <div>
                        <p>{item.time}</p>
                        {page === 1 && <p className='text-[var(--border-color)]'>{item.maxTime}</p>}
                        {page === 2 && <p className='text-[var(--border-color)]'>{item.maxTime}</p>}
                        {page === 3 && <p className='text-[var(--border-color)]'>{item.maxTime}</p>}
                        {page === 4 && <p className='text-[var(--border-color)]'>{item.maxTime}</p>}
                    </div>
                </div>
                <div className='w-[20%]'>
                    <p className='mb-2'>{item.doctor}</p>
                    <p>{item.patient}</p>
                </div>
                <div className='w-[20%] flex justify-between items-center'>
                    {page === 0 && <p className='text-[#C18CB3]'>archived</p>}
                    {page === 1 && <button className={` py-[9px] text-[var(--ligth-color)] px-[30px] font-bold bg-[#C18CB3] cursor-pointer rounded-xl`}>Complete</button>}
                    {page === 2 && <p className='text-[#C18CB3] text-md'>sended</p>}
                    {page === 3 && <div className="flex justify-end items-center">
                        <div className="flex flex-col justify-between items-center">
                            <button
                                onClick={() => onApprove(item)}
                                className={`w-[120px] mb-2 py-[9px] text-[var(--ligth-color)] font-bold bg-[#C18CB3] cursor-pointer rounded-lg`}
                            >
                                approve
                            </button>
                            <button
                                onClick={() => onReject(item)}
                                className="w-[118px] border border-[#C18CB3] py-[7px] outline-none cursor-pointer font-bold rounded-lg text-[#C18CB3] "
                            >
                                reject
                            </button>
                        </div>
                    </div>}
                    {page === 4 && <div className="flex justify-end items-center">
                        <div className="flex flex-col justify-between items-center">
                            <button
                                onClick={() => onShowNotes(item)}
                                className={`w-[120px] mb-2 py-[9px] text-[var(--ligth-color)] font-bold bg-[#C18CB3] cursor-pointer rounded-lg`}
                            >
                                show notes
                            </button>
                            <button
                                onClick={onComplete}
                                className="w-[118px] border border-[#C18CB3] py-[7px] outline-none cursor-pointer font-bold rounded-lg text-[#C18CB3] "
                            >
                                complete
                            </button>
                        </div>
                    </div>}
                    <img src={details} className='w-[25px]'/>
                </div>
            </div></div>
    );
}

export default CaseBox;
