import axios from "axios";
import React, { useState } from "react";
import { API } from "../../data/config";
import swal from "sweetalert";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const nav = useNavigate();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [showCodeField, setShowCodField] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(API.auth.VERIFY, {
        code: code,
        email: email
      })
      .then((res) => {
        console.log(res.data)
        Cookies.set("email", email, {
          path: "/",
          expires: 10
        });
        swal({
          title: `success`,
          timer: 3000,
          icon: "success"
        });
        setTimeout(() => {
          nav("/Reset_password");
        }, [3040]);
      })
      .catch((err) => {
        swal({
          icon: "warning",
          timer: 2100,
          title: `${err.response.data.message}`
        });
      });
  };

  const resendCodeHandler = () => {
    axios
      .post(API.auth.VERIFICATION_CODE, { email: email })
      .then((res) => {
        swal({
          title: `${res.data.message}`,
          timer: 3000,
          icon: "success"
        });
        setShowCodField(true);
      })
      .catch((err) => {
        swal({
          icon: "warning",
          timer: 2100,
          title: `${err.response.data.message}`
        });
      });
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${require("../../assets/images/stethososcope-doctors.jpg")})` }}
        className='register text-[var(--ligth-color)] relative flex items-center
            w-[100%] h-[100vh] bg-no-repeat bg-cover'
      >
        <div className="z-40 w-[400px] h-[400px] rounded-2xl bg-[var(--blue-color)] absolute left-[60%] p-4 shadow-xl">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">
              {showCodeField ? "Code verification" : "Forgot Password"}
            </h1>
            <hr className="mt-2 w-[50%]"></hr>
          </div>
          <div className="mt-14 mb-8 font-light pr-5 text-[var(--ligth-color)]">
            {showCodeField
              ? "Please enter the verification code that we sent to your email."
              : "Please enter your email"}
          </div>
          <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
            {showCodeField && (
              <div className="w-[100%] relative mb-5">
                <input
                  className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                  type="text"
                  value={code}
                  required
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter the code"
                />
              </div>
            )}
            {!showCodeField && (
              <div className="w-[100%] relative mb-12">
                <input
                  className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
              </div>
            )}
            {showCodeField && (
              <p className="mb-4 mt-5">
                Code not received?
                <span
                  className="cursor-pointer ml-1 text-[var(--gray-color)]"
                  onClick={resendCodeHandler}
                >
                  Resend the code
                </span>
              </p>
            )}
            <button
              className="py-[10px] px-[35px] mx-auto my-4 font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg"
              onClick={showCodeField ? submitHandler : resendCodeHandler}
              type={showCodeField ? "submit" : "button"}
            >
              {showCodeField ? "Verify" : "Confirm"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
