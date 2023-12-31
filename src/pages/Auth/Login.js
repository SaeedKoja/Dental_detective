import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../data/config";
import Cookies from "js-cookie";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/auth";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(API.auth.LOGIN, { email: email, password: password })
      .then((res) => {
        Cookies.set("user", JSON.stringify(res.data.user), {
          path: "/",
          expires: 10
        });
        Cookies.set("id", res.data.user.id, {
          path: "/",
          expires: 10
        });
        Cookies.set("token", res.data.token, {
          path: "/",
          expires: 10
        });
        swal({
          title: `success`,
          timer: 3000,
          icon: "success"
        });
        setTimeout(() => {
          dispatch(authAction.loginHandler(true));
          nav("/Dental/Home");
        }, [3040]);
      })
      .catch((err) => {
        swal({
          icon: "warning",
          timer: 3000,
          title: `${err.response.data.message}`
        });
      });
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${require("../../assets/images/flat-lay-health-still-life-arrangement-with-copy-space.jpg")})` }}
        className='text-[var(--ligth-color)] relative flex items-center w-[100%] h-[100vh] bg-no-repeat bg-cover'
      >
        <div className="z-40 w-[370px] h-[420px] rounded-2xl bg-[var(--blue-color)] absolute left-[60%] p-4 shadow-lg">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">Login</h1>
            <hr className="mt-3 mb-4 w-[50%]"></hr>
          </div>
          <form
            className="flex flex-col w-[100%] mt-7"
            onSubmit={submitHandler}
          >
            <div className="w-[100%] relative mb-7">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-10 w-[100%]"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <box-icon
                name="envelope"
                color="#94a3b8"
                style={{
                  position: "absolute",
                  top: "19%",
                  left: "12px",
                  opacity: "0.7"
                }}
              ></box-icon>
            </div>
            <div className="w-[100%] relative mb-5">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-10 w-[100%]"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <box-icon
                name="lock-alt"
                color="#94a3b8"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "12px",
                  opacity: "0.7"
                }}
              ></box-icon>
              {!showPassword && (
                <box-icon
                  name="show"
                  color="#94a3b8"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {showPassword && (
                <box-icon
                  name="hide"
                  color="#94a3b8"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
            </div>
            <p
              className="text-center mt-3 cursor-pointer"
              onClick={() => {
                nav("/ForgotPassword");
              }}
            >
              Forgot Password ?
            </p>
            <button
              type="submit"
              className="text-slate-200 py-[10px] px-[35px] mx-auto my-[30px] font-bold bg-[var(--dark-color)] cursor-pointer shadow-lg rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
