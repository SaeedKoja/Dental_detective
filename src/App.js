import { Route, Routes } from "react-router-dom";
import React from "react";
import Dental from "./pages/Dental/Dental";
import Login from "./pages/Auth/Login"
import RedirectPage from "./pages/Auth/RedirectPage"
import Home from "./pages/Home/Home"
import SendComplaints from "./pages/SendComplaints/SendComplaints";
import Complaints from "./pages/Complaints/Complaints";
import Archive from "./pages/Archive/Archive";
import Clients from "./pages/Clients/Clients";
import Portfolio from "./pages/Portfolio/Portfolio";
import { useSelector } from "react-redux";
import ResetPassword from "./pages/Auth/ResetPassword";
import ForgotPassword from "./pages/Auth/ForgotPassword";


function App() {
  const isLogged = useSelector((state) => state.auth.isLogged)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RedirectPage />}></Route>
        {!isLogged && <Route path="/Login" element={<Login />}></Route>}
        {!isLogged && (
          <Route path="/Reset_password" element={<ResetPassword />}></Route>
        )}
        {!isLogged && (
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        )}
        {isLogged && (
          <Route path="/Dental" element={<Dental />}>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Portfolio" element={<Portfolio />}></Route>
            <Route path="Clients" element={<Clients />}></Route>
            <Route path="Archive" element={<Archive />}></Route>
            <Route path="Complaints" element={<Complaints />}></Route>
            <Route path="SendComplaints" element={<SendComplaints />}></Route>
          </Route>
        )}
      </Routes>
    </div>

  );
}

export default App;
