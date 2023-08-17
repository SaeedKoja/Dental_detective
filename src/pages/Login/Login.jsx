import React, { useState, useEffect, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import validation from "./validation";
import img1 from "../img/img1.svg";
import img2 from "../img/img2.svg";
import Frame from "../img/Frame.svg";
// import { Mail } from '@mui/icons-material';

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import  axios  from "axios";

function Login() {
  // const [formValue, setFormValue] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email,setemail]=useState("")
  const [password,setpasword]=useState("")

  const [errors, setError] = useState("");
  const navigate=useNavigate()



  // const handleChange = (e) => {
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setemail(value);
    } else if (name === 'password') {
      setpasword(value);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // fetch('http://127.0.0.1:8000/api/users/login',{
    //   method:"Post",
    //   headers:{
    //     "Accept":"application/json",
    //     "content_type":"application/json",
    //   },
    //   body:JSON.stringify()
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.warn(resp)
    //   })
    // })
    try {
     await axios.post("http://127.0.0.1:8000/api/users/login",{email,password},
    );
      setemail("");
      setpasword("")
      navigate("/home")
      // do something with the response data, such as storing the user's access token in local storage or state
    } catch (error) {
      console.log(event);
    }
    setError(validation(email,password));
  };

  return (
    <MDBContainer
      fluid
      className=" background-radial-gradient overflow-hidden "
      style={{ padding: "7.69rem" }}
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-4 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            The Best Experience <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>for your teeth</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            <img src={Frame} alt="My Image" />
          </p>
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
          <MDBCard className="my-5 bg-glass" style={{ padding: "3.5rem" }}>
            <h1
              className="text-center fw-bold ls-tight "
              style={{ paddingBottom: "1rem", color: "#7878FF" }}
            >
              Login <br />
            </h1>
            <form onSubmit={handleSubmit}>
              {/* <Mail></Mail> */}
              <MDBInput
                type="text"
                id="username"
                autoComplete="off"
                value={email}
                label="Email"
                name="email"
                onChange={handleChange}
                required
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              <br></br>

              <MDBInput
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={handleChange}
                name="password"
                required
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
              <br />
              <MDBBtn color="primary" type="submit">
                Submit
              </MDBBtn>
              <br />
              <div>
              <Link to="/forget">Forgot Password?</Link>
              </div>
             
            </form>

 
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}


export default Login;
