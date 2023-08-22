import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RedirectPage = () => {
  // const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
  const id = Cookies.get("id");
  const nav = useNavigate();

  useEffect(() => {
    if (!id) {
      // if (user ? !!user?.phone_number : false) nav("/Aafia/Home");
      nav("/Login");
    } else {
      // if (user ? !user?.email_verified : false) nav("/CodeVerification");
      nav("/Dental/Home");
    }
  }, [id]);

  return <div></div>;
};

export default RedirectPage;
