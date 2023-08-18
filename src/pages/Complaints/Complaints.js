import React from 'react';
import { useDispatch } from "react-redux";
import { activeAction } from '../../store/active-ui';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteItem from '../../components/DeleteItem';
import ClientBox from '../../components/ClientBox';
import { useRef } from 'react';

const Complaints = () => {
    const dispatch = useDispatch();
    const [del, setDel] = useState();
    const pageRef = useRef(null);
    const [clientId, setClientId] = useState("");
    const data = [
        {
            name: 'Fadi Awad',
            email: 'fadidoctor@gmail.com',
            location: 'damascus - syria',
            phone: '0936286430',
            status: 'complaint',
            description: '70% of the composition of our body is water. It’s an essential element to keep the body healthy because it cleans the body',
        },
        {
            name: 'Saeed Koja',
            email: 'saeedkoja@gmail.com',
            location: 'homs - syria',
            phone: '0936284530',
            status: 'complaint',
            description: '70% of the composition of our body is water. It’s an essential element to keep the body healthy because it cleans the body',
        },
        {
            name: 'Ahmad Kurdy',
            email: 'ahmaddoctor@gmail.com',
            location: 'damascus - syria',
            phone: '0936286430',
            status: 'complaint',
            description: '70% of the composition of our body is water. It’s an essential element to keep the body healthy because it cleans the body',
        },
        {
            name: 'Fadi Awad',
            email: 'fadidoctor@gmail.com',
            location: 'damascus - syria',
            phone: '0936286430',
            status: 'complaint',
            description: '70% of the composition of our body is water. It’s an essential element to keep the body healthy because it cleans the body',
        },
        {
            name: 'Fadi Awad',
            email: 'fadidoctor@gmail.com',
            location: 'damascus - syria',
            phone: '0936286430',
            status: 'complaint',
            description: '70% of the composition of our body is water. It’s an essential element to keep the body healthy because it cleans the body',
        },
    ]

    const deleteClientHandler = (id) => {
        setClientId(id);
        setDel(true);
    };

    useEffect(() => {
        pageRef.current.scrollIntoView({ behavior: "smooth" });
      }, []);

    const confrimHandler = () => {
        // axios
        //     .delete(`${API.consultations.CONSULTATIONS}${conId}`, {
        //         headers: {
        //             Authorization: "JWT " + Cookies.get("accessToken")
        //         }
        //     })
        //     .then((res) => {
        //         console.log(res);
        //         setDel(false);
        //         setConsultations((prev) => {
        //             return {
        //                 ...prev,
        //                 count: consultations.count - 1,
        //                 pending_count: isPending
        //                     ? consultations.pending_count - 1
        //                     : consultations.pending,
        //                 data: consultations.data.filter((array) => array.id !== conId)
        //             };
        //         });
        //     });
    };


    useEffect(() => {
        dispatch(activeAction.replaceActiveState('Complaints'))
    }, [])

    const searchHandler = (e) => { }

    return (
        <div className='pl-[300px] pr-5 py-5' ref={pageRef}>
            {del && (
                <DeleteItem onConfrim={confrimHandler} onBack={() => setDel(false)} />
            )}
            <div className='mb-16 flex justify-between items-center '>
                <p className='text-[var(--blak-color)] text-4xl font-bold'>Complaints from clients</p>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="search for a specific client"
                        className="shadow-md w-[500px] border border-[var(--gray-color)] rounded-l-full rounded-r-full py-2 pr-2 pl-12 bg-inherit"
                        name="searsh"
                        onChange={searchHandler}
                    />
                    <div className="absolute top-[10px] left-4 opacity-[0.6]">
                        <box-icon name="search" color="var(--gray-color)"></box-icon>
                    </div>
                </div>
            </div>
            <div
                className="mx-20"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "30px",
                    margin: "auto",
                    maxWidth: "100%",
                }}
            >
                {data.map((doctor, index) => {
                    return (
                        <ClientBox page='complaints' doctor={doctor} key={index} onDelete={deleteClientHandler} />
                    )
                })}
            </div>
        </div>
    );
}

export default Complaints;
