import React from 'react';
import cancel from '../assets/icons/cancel.png';

const ProductBox = ({item,onDelete}) => {
    return (
        <div className='flex flex-col items-center py-4 px-2 border-[2px] rounded-l-[18px] rounded-r-[18px] bg-white shadow-sm border-[var(--border-color)]'>
            <img className='w-[194px] h-[194px] mb-5 rounded-md' src={item.image} alt=''></img>
            <p className='text-xl font-bold text-[var(--dark-color)]'>{item.comment}</p>
            <img className='w-[35px] mt-4 cursor-pointer' onClick={() => onDelete(item.id)} alt='' src={cancel}></img>
        </div>
    );
}

export default ProductBox;
