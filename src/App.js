import { Route, Routes } from "react-router-dom";
import React from "react";
import Dental from "./pages/Dental/Dental";
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import RedirectPage from "./pages/Auth/RedirectPage"
import CodeVerification from "./pages/Auth/CodeVerification"
import ChangePassword from "./pages/Auth/ChangePassword"
import ResetPassword from "./pages/Auth/ResetPassword"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import Home from "./pages/Home/Home"
import SendComplaints from "./pages/SendComplaints/SendComplaints";
import Complaints from "./pages/Complaints/Complaints";
import Archive from "./pages/Archive/Archive";
import Clients from "./pages/Clients/Clients";
import Portfolio from "./pages/Portfolio/Portfolio";
import UseAxiosGet from "./hooks/useAxiosGet";


function App() {
  const isLoggedIn = true
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RedirectPage />}></Route>
        {!isLoggedIn && <Route path="/Login" element={<Login />}></Route>}
        {!isLoggedIn && <Route path="/Register" element={<Register />}></Route>}
        {!isLoggedIn && (
          <Route
            path="/CodeVerification"
            element={<CodeVerification />}
          ></Route>
        )}
        {isLoggedIn && (
          <Route path="/Change_password" element={<ChangePassword />}></Route>
        )}
        {!isLoggedIn && (
          <Route path="/Reset_password" element={<ResetPassword />}></Route>
        )}
        {!isLoggedIn && (
          <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        )}
        {isLoggedIn && (
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
