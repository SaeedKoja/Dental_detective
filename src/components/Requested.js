import React from 'react';
import CaseBox from './CaseBox';
import ApproveForm from './ApproveForm';
import { useState } from 'react';
import DeleteItem from './DeleteItem';

const Requested = () => {
    const [del, setDel] = useState();
    const [showApproveForm, setshowApproveForm] = useState();
    const [fetchAgain, setFetchAgain] = useState(false);
    const [formId, setFormtId] = useState("");

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

    const rejectHandler = (id) => {
        setFormtId(id);
        setDel(true);
    };

    const approveBackHandler = () => {
        setshowApproveForm(false)
        setFetchAgain(!fetchAgain)
    }

    const approveHandler = (item) => {
        setshowApproveForm(item);
    };

    const data = [
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
    ]

    return (
        <div>
            {del && (
                <DeleteItem onConfrim={confrimHandler} button="Reject" content="? Are you sure to reject this record" title="Reject the record" onBack={() => setDel(false)} />
            )}
            {showApproveForm && (
                <ApproveForm
                    item={showApproveForm}
                    goBackHandler={approveBackHandler}
                />
            )}
            {data.map((item, index) => {
                return (
                    <CaseBox item={item} onReject={rejectHandler} onApprove={approveHandler} key={index} page={3} />
                )
            })}
        </div>
    );
}

export default Requested;
