import React from 'react';
import './NavBar.css';
import logo1 from '../assets/logo/Graphicsfamily (11) 1.svg'
import logo2 from '../assets/logo/Graphicsfamily (12).svg'
import home from '../assets/icons/home(1).png'
import portfolio from '../assets/icons/user(1).png'
import clients from '../assets/icons/group(1).png'
import send from '../assets/icons/send.png'
import archive from '../assets/icons/download-file(1).png'
import complaints from '../assets/icons/file.png'
import logout from '../assets/icons/logout.png'
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { activeAction } from "../store/active-ui";
import { useSelector } from 'react-redux';

const NavBar = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const activePage = useSelector((state) => state.active.activePage)


    const clickHandler = (page) => {
        dispatch(activeAction.replaceActiveState(page))
        nav(`/Dental/${page}`)
    }

    return (
        <div className='navBar z-[10000] w-[260px] h-[100vh] fixed bg-[var(--dark-color)] py-3 rounded-r-3xl'>
            <div className='flex justify-start px-4 items-end'>
                <img src={logo1} alt='logo' className='w-[60px]'></img>
                <img src={logo2} alt='logo' className='w-[80px]'></img>
            </div>
            <div className='mt-3 px-4 text-[var(--ligth-color)]'>
                <p className='text-lg mb-3'>Laboratory name</p>
                <p className='text-sm font-light opacity-[0.7] mb-1'>0936286430</p>
                <p className='text-sm font-light opacity-[0.7]'>damascus - syria</p>
            </div>
            <hr className="px-4 w-[80%] m-auto mt-6 rounded-full border-[var(--ligth-color)]"></hr>
            <div className='my-6 h-[300px] flex flex-col text-[var(--ligth-color)] justify-between items-start'>
                <div className='relative w-[100%]'><div onClick={() => clickHandler("Home")} className={`flex items-end pl-7 py-3 w-[100%] cursor-pointer ${activePage === "Home" && "active"}`}>
                    <img src={home} className='mr-4 w-[25px]'></img>
                    <p className=''>Home</p>
                </div></div>
                <div className='relative w-[100%]'><div onClick={() => clickHandler("Portfolio")} className={`flex items-end pl-7 py-3 w-[100%] cursor-pointer ${activePage === "Portfolio" && "active"}`}>
                    <img src={portfolio} className='mr-4 w-[25px]'></img>
                    <p className=''>Portfolio</p>
                </div></div>
                <div className='relative w-[100%]'><div onClick={() => clickHandler("Clients")} className={`flex items-end pl-7 py-3 w-[100%] cursor-pointer ${activePage === "Clients" && "active"}`}>
                    <img src={clients} className='mr-4 w-[25px]'></img>
                    <p className=''>my client</p>
                </div></div>
                <div className='relative w-[100%]'><div onClick={() => clickHandler("Archive")} className={`flex items-end pl-7 py-3 w-[100%] cursor-pointer ${activePage === "Archive" && "active"}`}>
                    <img src={archive} className='mr-4 w-[25px]'></img>
                    <p className=''>archive</p>
                </div></div>
                <div className='relative w-[100%]'><div onClick={() => clickHandler("Complaints")} className={`flex items-end pl-7 py-3 w-[100%] cursor-pointer ${activePage === "Complaints" && "active"}`}>
                    <img src={complaints} className='mr-4 w-[25px]'></img>
                    <p className=''>complaints</p>
                </div></div>
                <div className='relative w-[100%]'><div onClick={() => clickHandler("SendComplaints")} className={`flex items-end pl-7 py-3 w-[100%] cursor-pointer ${activePage === "SendComplaints" && "active"}`}>
                    <img src={send} className='mr-4 w-[25px]'></img>
                    <p className=''>send conplaint</p>
                </div></div>
            </div>
            <hr className="px-4 w-[80%] m-auto mt-9 rounded-full border-[var(--ligth-color)]"></hr>
            <div className='px-4 flex justify-start pl-12 items-end mt-5 cursor-pointer'>
                <img src={logout} className='mr-4 w-[25px]'></img>
                <p className='text-[var(--ligth-color)]'>log out</p>
            </div>
        </div>
    );
}

export default NavBar;
