import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RedirectPage = () => {
  // const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
  const token = Cookies.get("accessToken");
  const nav = useNavigate();

  useEffect(() => {
    if (!token) {
      // if (user ? !!user?.phone_number : false) nav("/Aafia/Home");
      nav("/Login");
    } else {
      // if (user ? !user?.email_verified : false) nav("/CodeVerification");
      nav("/Dental/Home");
    }
  }, [ token]);

  return <div></div>;
};

export default RedirectPage;
