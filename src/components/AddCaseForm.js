import axios from 'axios';
import 'boxicons';
import React, { useState } from 'react';
import { API } from '../data/config';
import Cookies from 'js-cookie';
import swal from 'sweetalert';


const AddCaseForm = ({ goBackHandler }) => {
    const [comment, setComment] = useState("")
    const [image, setImage] = useState(null)
    const [imageView, setImageView] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(image)
        const formData = new FormData();
        formData.append("image", image);
        formData.append("comment", comment);
        axios
            .post(`${API.Dentallabs.ADD_CASES}/${Cookies.get("id")}`, formData)
            .then((res) => {
                swal({
                    title: `success`,
                    timer: 3000,
                    icon: "success"
                });
                setTimeout(() => {
                    goBackHandler()
                }, [3040]);
            })
            .catch((err) => {
                swal({
                    icon: "warning",
                    timer: 3000,
                    title: `${err.response.data.message}`
                });
            });
    }

    const onImageChange = (event) => {
        setImageView(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    };

    const removeImageHandler = () => {
        setImage(null);
        setImageView(null)
    };


    return (
        <div
            style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
            className="fixed w-[100%] h-[100vh] top-0 right-0 z-[10000] flex justify-center items-center"
        >
            <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto pt-11 px-8 bg-[var(--background-color)]">
                <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
                    <div className="w-[100%] relative flex justify-between items-center">
                        <div className="imgcontent w-[100%] relative mb-5">
                            <input
                                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                                type="file"
                                style={{ display: "none" }}
                                id="image"
                                onChange={onImageChange}
                            />
                            <label className="top-top" htmlFor="image">
                                <box-icon
                                    color="var(--blue-color)"
                                    type="solid"
                                    name="file-plus"
                                ></box-icon>
                                Image (jpg)
                            </label>
                            {imageView && (
                                <div className="place-image">
                                    <p
                                        onClick={() => removeImageHandler()}
                                        style={{ cursor: "pointer" }}
                                    >
                                        x
                                    </p>
                                    <img src={imageView} alt="" />
                                </div>
                            )}
                        </div>
                        <div className="child">
                            <input
                                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                                type="text"
                                name='comment'
                                style={{ marginLeft: "7px" }}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />
                            <label className="top-top">Comment</label>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="w-[31%] flex justify-between items-center mb-8 mt-5">
                            <button
                                type="submit"
                                className={`py-[9px] text-[var(--ligth-color)] px-[30px] font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg`}
                            >
                                Submit
                            </button>
                            <button
                                onClick={goBackHandler}
                                className="border border-[var(--dark-color)] px-[30px] py-[8px] outline-none cursor-pointer font-bold rounded-lg text-[var(--dark-color)] "
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default AddCaseForm;
