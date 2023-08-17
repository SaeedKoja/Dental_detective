import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
 
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/users/checkemail", { email });
      setMessage(response.data.message);
      navigate("/verify")
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
        <h2>Forgot Password </h2>
          <form onSubmit={handleForgotPassword}>
            {/* <Mail></Mail> */}
            <MDBInput
            id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <br></br>
            {message && <p>{message}</p>}
            <MDBBtn color="primary" type="submit">
            verify email
            
             
              
           
            </MDBBtn>
            <br />
           
           
          </form>


        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>


  );
};

export default ForgotPassword;   
     
{/* <form onSubmit={handleForgotPassword}>
  <input
    type="email"
    placeholder="Email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <button type="submit">Reset Password</button>
</form>
{message && <p>{message}</p>}
</div> */}