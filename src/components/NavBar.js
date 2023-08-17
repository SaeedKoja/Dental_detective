import React from 'react';
import logo1 from '../assets/logo/Graphicsfamily (11) 1.svg'
import logo2 from '../assets/logo/Graphicsfamily (12) 1.svg'
import home from '../assets/icons/home(1).png'
import portfolio from '../assets/icons/user(1).png'
import clients from '../assets/icons/group(1).png'
import send from '../assets/icons/send.png'
import archive from '../assets/icons/download-file(1).png'
import complaints from '../assets/icons/file.png'
import logout from '../assets/icons/logout.png'

const NavBar = () => {
    return (
        <div className='w-[260px] h-[100vh] fixed bg-[var(--dark-color)] py-5 px-4 rounded-r-3xl'>
            <div className='flex justify-start items-start'>
                <img src={logo1} alt='logo' className='w-[60px]'></img>
                <img src={logo2} alt='logo' className='w-[80px]'></img>
            </div>
            <div className='mt-3 text-[var(--ligth-color)]'>
                <p className='text-lg mb-3'>Laboratory name</p>
                <p className='text-sm font-light opacity-[0.7] mb-1'>0936286430</p>
                <p className='text-sm font-light opacity-[0.7]'>damascus - syria</p>
            </div>
            <hr className="w-[80%] m-auto mt-6 rounded-full border-[var(--ligth-color)]"></hr>
            <div className='my-6 pl-3 h-[300px] flex flex-col text-[var(--ligth-color)] justify-between items-start'>
                <div className='flex items-end cursor-pointer'>
                    <img src={home} className='mr-4 w-[25px]'></img>
                    <p className=''>Home</p>
                </div>
                <div className='flex items-end cursor-pointer'>
                    <img src={portfolio} className='mr-4 w-[25px]'></img>
                    <p className=''>Portfolio</p>
                </div>
                <div className='flex items-end cursor-pointer'>
                    <img src={clients} className='mr-4 w-[25px]'></img>
                    <p className=''>my client</p>
                </div>
                <div className='flex items-end cursor-pointer'>
                    <img src={archive} className='mr-4 w-[25px]'></img>
                    <p className=''>archive</p>
                </div>
                <div className='flex items-end cursor-pointer'>
                    <img src={complaints} className='mr-4 w-[25px]'></img>
                    <p className=''>complaints</p>
                </div>
                <div className='flex items-end cursor-pointer'>
                    <img src={send} className='mr-4 w-[25px]'></img>
                    <p className=''>send conplaint</p>
                </div>
            </div>
            <hr className="w-[80%] m-auto mt-9 rounded-full border-[var(--ligth-color)]"></hr>
            <div className='flex justify-start pl-12 items-end mt-5 cursor-pointer'>
                <img src={logout} className='mr-4 w-[25px]'></img>
                <p className='text-[var(--ligth-color)]'>log out</p>
            </div>
        </div>
    );
}

export default NavBar;
