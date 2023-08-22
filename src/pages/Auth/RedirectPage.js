import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RedirectPage = () => {
  const id = Cookies.get("id");
  const nav = useNavigate();

  useEffect(() => {
    if (!id) {
      nav("/Login");
    } else {
      nav("/Dental/Home");
    }
  }, [id]);

  return <div></div>;
};

export default RedirectPage;
