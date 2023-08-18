import React from 'react';
import user from '../assets/icons/user1.png';
import cancel from '../assets/icons/cancel.png';
import location from '../assets/icons/location.png';
import tel from '../assets/icons/phone-call.png';

const ClientBox = ({doctor,onDelete,page='clients'}) => {
    return (
        <div className='relative'>
            <div className='client flex flex-col items-center py-4 px-3 pt-10 border-[2px] rounded-l-[18px] rounded-r-[18px] bg-white shadow-sm border-[var(--border-color)]'>
                <img className='w-[30px] mb-7' src={user}></img>
                    <p className='text-xl font-bold text-[var(--dark-color)]'>{doctor.name}</p>
                <p className='font-light text-[var(--border-color)]'>{doctor.email}</p>
                <div className='flex flex-col justify-start'> <div className='mb-2 flex items-center justify-start mt-5'>
                    <img className='w-[20px] mr-3' src={location}></img>
                    <p className='text-[var(--dark-color)] font-light'>{doctor.location}</p>
                </div>
                    <div className='flex items-center'>
                        <img className='w-[20px] mr-3' src={tel}></img>
                        <p className='text-[var(--dark-color)] font-light'>{doctor.phone}</p>
                    </div></div>
                    {page ==='complaints' && <div className='mt-5 flex flex-col items-center'>
                            <p className='mb-2 text-lg font-semibold text-[var(--dark-color)]'>{doctor.status}</p>
                            <p className='text-center text-sm opacity-[0.8] font-light text-[var(--dark-color)]'>{doctor.description}</p>
                        </div>}
                <img className='w-[30px] mt-7 cursor-pointer' onClick={() => onDelete(3)} src={cancel}></img>
            </div>
        </div>
    );
}

export default ClientBox;
