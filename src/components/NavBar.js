import React from 'react';
import logo1 from '../assets/logo/Graphicsfamily (11) 1.svg'
import logo2 from '../assets/logo/Graphicsfamily (12) 1.svg'

const NavBar = () => {
    return (
        <div className='w-[260px] h-[100vh] fixed bg-[var(--dark-color)] py-7 px-4 rounded-r-3xl'>
            <div className='flex justify-start items-start'>
                <img src={logo1} alt='logo' className='w-[100px]'></img>
                <img src={logo2} alt='logo' className='w-[120px]'></img>
            </div>
            <div className='mt-5 text-[var(--ligth-color)]'>
                <p className='text-xl mb-3'>Laboratory name</p>
                <p className='text-sm font-light opacity-[0.7] mb-1'>0936286430</p>
                <p className='text-sm font-light opacity-[0.7]'>damascus - syria</p>
            </div>
            <hr className="w-[80%] m-auto mt-12 rounded-full border-[var(--ligth-color)]"></hr>
        </div>
    );
}

export default NavBar;
