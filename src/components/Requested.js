import React, { useCallback, useEffect } from 'react';
import CaseBox from './CaseBox';
import ApproveForm from './ApproveForm';
import { useState } from 'react';
import DeleteItem from './DeleteItem';
import { API } from '../data/config';
import axios from 'axios';
import Cookies from 'js-cookie';

const Requested = ({ onShowDetails, setForms, setFactData, forms, setFetchAgain, fetchAgain }) => {
    const [del, setDel] = useState();
    const [showApproveForm, setshowApproveForm] = useState(false);
    const [fetchAgainD, setFetchAgainD] = useState(false);
    const [formId, setFormtId] = useState("");

    const fetchHandler = useCallback(() => {
        axios
            .get(`${API.Dentallabs.GET_REQUESTED}/${Cookies.get("id")}`
            )
            .then((res) => {
                setForms(res.data.data);
                setFactData(res.data.data);
            });
    }, []);

    useEffect(() => {
        fetchHandler();
    }, [fetchHandler, fetchAgainD]);

    useEffect(() => {
        setForms([])
    }, []);

    const confrimHandler = () => {
        axios
            .post(`${API.Dentallabs.REJECT_REQUESTED}/${formId}`)
            .then((res) => {
                console.log(res);
                setDel(false);
                setForms(forms.filter((array) => +array.id !== +formId));
                setFactData(forms.filter((array) => +array.id !== +formId));
                setFetchAgain(!fetchAgain)
            });
    };

    const rejectHandler = (id) => {
        setFormtId(id);
        setDel(true);
    };

    const approveBackHandler = () => {
        setshowApproveForm(false)
        setFetchAgainD(!fetchAgainD)
        setFetchAgain(!fetchAgain)
    }

    const approveHandler = (item) => {
        setshowApproveForm(item);
    };

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
            {forms && forms.map((item, index) => {
                return (
                    <CaseBox item={item} onReject={rejectHandler} onShowDetails={onShowDetails} onApprove={approveHandler} key={index} page={3} />
                )
            })}
        </div>
    );
}

export default Requested;
