import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import clock from '../../assets/icons/clock.png';
import { useRef } from 'react';
import CaseBox from '../../components/CaseBox';

const Archive = () => {
    const dispatch = useDispatch();
    const pageRef = useRef(null);

    const data =[
        {
            type:'type of case',
            time:'12/8/2023',
            patient:'Saeed Koja',
            doctor:'Hamza Ahmad',
        },
        {
            type:'type of case',
            time:'12/8/2023',
            patient:'Saeed Koja',
            doctor:'Hamza Ahmad',
        },
        {
            type:'type of case',
            time:'12/8/2023',
            patient:'Saeed Koja',
            doctor:'Hamza Ahmad',
        },
        {
            type:'type of case',
            time:'12/8/2023',
            patient:'Saeed Koja',
            doctor:'Hamza Ahmad',
        },
        {
            type:'type of case',
            time:'12/8/2023',
            patient:'Saeed Koja',
            doctor:'Hamza Ahmad',
        },
    ]

    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Archive'))
    }, [])

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const searchHandler = (e) => {
        //     let searchQuery = e.target.value;
        //     let resultSearch = doctorsData?.data.filter((doctor) => {
        //       return (
        //         doctor.first_name.includes(searchQuery) ||
        //         doctor.last_name.includes(searchQuery) ||
        //         doctor.city.country.includes(searchQuery) ||
        //         doctor.city.name.includes(searchQuery)
        //       );
        //     });
        //     if (searchQuery === "") {
        //       setDoctors(doctorsData.data);
        //     } else {
        //       setDoctors(resultSearch);
        //     }
    };


    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            <div className='mb-16 w-[900px] flex justify-between items-center '>
                <p className='text-[var(--blak-color)] text-4xl font-bold'>Archived forms</p>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="search for a specific form"
                        className="shadow-md w-[500px] border border-[var(--gray-color)] rounded-l-full rounded-r-full py-2 pr-2 pl-12 bg-inherit"
                        name="searsh"
                        onChange={searchHandler}
                    />
                    <div className="absolute top-[10px] left-4 opacity-[0.6]">
                        <box-icon name="search" color="var(--gray-color)"></box-icon>
                    </div>
                </div>
            </div>
            {data.map((item, index) => {
                return (
                    <CaseBox item={item} page={0}/>
            )
            })}
            {/* <div className='relative text-sm'>
                <div className='form mb-5 flex justify-between border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]  items-center w-[100%] py-5 px-6 text-[var(--dark-color)]'>
                    <p className='text-center w-[20%]'>type of case</p>
                    <div className='w-[20%] flex justify-center items-center'>
                        <img className='w-[20px] mr-2' src={clock}></img>
                        <p>12/8/2023</p>
                    </div>
                    <div className='w-[20%]'>
                        <p className='mb-2'>patient name</p>
                        <p>doctor name</p>
                    </div>
                    <p className='w-[14%] text-[var(--blue-color)]'>archived</p>
                </div></div>
            <div className='relative text-sm'>
                <div className='form mb-5 flex justify-between border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]  items-center w-[100%] py-5 px-6 text-[var(--dark-color)]'>
                    <p className='text-center w-[20%]'>type of case</p>
                    <div className='w-[20%] flex justify-center items-center'>
                        <img className='w-[20px] mr-2' src={clock}></img>
                        <p>12/8/2023</p>
                    </div>
                    <div className='w-[20%]'>
                        <p className='mb-2'>patient name</p>
                        <p>doctor name</p>
                    </div>
                    <p className='w-[14%] text-[var(--blue-color)]'>archived</p>
                </div></div>
            <div className='relative text-sm'>
                <div className='form mb-5 flex justify-between border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]  items-center w-[100%] py-5 px-6 text-[var(--dark-color)]'>
                    <p className='text-center w-[20%]'>type of case</p>
                    <div className='w-[20%] flex justify-center items-center'>
                        <img className='w-[20px] mr-2' src={clock}></img>
                        <p>12/8/2023</p>
                    </div>
                    <div className='w-[20%]'>
                        <p className='mb-2'>patient name</p>
                        <p>doctor name</p>
                    </div>
                    <p className='w-[14%] text-[var(--blue-color)]'>archived</p>
                </div></div>
            <div className='relative text-sm'>
                <div className='form mb-5 flex justify-between border-[2px] rounded-l-[18px] rounded-r-[18px] border-[var(--border-color)]  items-center w-[100%] py-5 px-6 text-[var(--dark-color)]'>
                    <p className='text-center w-[20%]'>type of case</p>
                    <div className='w-[20%] flex justify-center items-center'>
                        <img className='w-[20px] mr-2' src={clock}></img>
                        <p>12/8/2023</p>
                    </div>
                    <div className='w-[20%]'>
                        <p className='mb-2'>patient name</p>
                        <p>doctor name</p>
                    </div>
                    <p className='w-[14%] text-[var(--blue-color)]'>archived</p>
                </div></div> */}
        </div>
    );
}

export default Archive;
