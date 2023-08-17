import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/Login/forget";
import Verify from "./pages/Login/verify";
import UpdatePassword from "./pages/Login/updatePasword";
import Style from "./pages/Login/login.css"
import Home from "./Component/home"
//import '../src/App.scss'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forget" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/updatePassword" element={<UpdatePassword />} />

    </Routes>

  );
}

export default App;
