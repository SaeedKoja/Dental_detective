import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
 
} from "mdb-react-ui-kit";


const Verify = () => {
  const [email,setemail]=useState("")
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/users/checkcode", {email, code });
      setMessage(response.data.message);
      navigate("/updatePassword")
    } catch (erros) {
      setMessage(erros.response.data.message);
    }
  };

  return (

    <MDBContainer
    fluid
    className=" background-radial-gradient overflow-hidden "
    style={{ padding: "7.69rem" }}
  >
  

<MDBRow>
<MDBCol
          md="3"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
         

         
        </MDBCol>
      <MDBCol md="6" className="position-relative">
        <div
          id="radius-shape-1"
          className="position-absolute rounded-circle shadow-5-strong"
        ></div>
        <div
          id="radius-shape-2"
          className="position-absolute shadow-5-strong"
        ></div>
{/* 4949FF */}
        <MDBCard className="my-5 bg-glass" style={{ padding: "6.31rem" }}>
        <h2>Email Verify</h2>
          <form onSubmit={handleVerify}>
          <MDBInput
              id="email"
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br></br>
            {/* <Mail></Mail> */}
            <MDBInput
              id="code"
              name="code"
              required
              type="text"
              placeholder="Enter your Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            
            <br></br>
          
            {message && <p>{message}</p>}
            <MDBBtn color="primary" type="submit">
            Reset Password
            </MDBBtn>
            <br />
          
           
          </form>


        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>


  );
};

export default Verify;   
     
