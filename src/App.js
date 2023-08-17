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
            {/* <Route path="Consultation" element={<Consultation />}></Route>
            <Route path="ConReview/:id" element={<ConReview />}></Route>
            <Route path="ConRepley/:id" element={<ConRepley />}></Route>
            <Route path="RevRepley/:id" element={<RevRepley />}></Route>
            <Route
              path="DoctorsAppointment/:id"
              element={<DoctorsAppointment />}
            ></Route>
            <Route path="Review" element={<Review />}></Route>
            <Route path="Appointment" element={<Dating />}></Route>
            <Route path="Advices" element={<Advices />}></Route> */}
          </Route>
        )}
      </Routes>
    </div>

  );
}

export default App;
