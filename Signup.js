import React from "react";
import classes from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Signup() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    if (signupSuccess) {
      // Perform actions after successful signup (e.g., redirect)
      console.log("Signup successful!");
      // You can redirect here using a navigation library like react-router-dom
    }
  }, [signupSuccess]);
  const  submitHandler=async(e)=> {
      
   e.preventDefault();
   setSignupSuccess(false);
   setErrorMessage(null);
   try {
    console.log(email);
    await axios
      .post("http://localhost:5000/signup", {
        "username": username,
        "email": email,
        "password": password
      })
      


    // Set the state with the JSON data from the response

    setSignupSuccess(true);
  } catch (error) {
    setErrorMessage(error.response.data.message);
  }
  
  }

  return (
    <div className={classes.main}>
      <div className={classes.signup}>
        <div className={classes.name}>
          <b>Enter your name </b>
          <requid>
            <input type="text" placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
          </requid>
        </div>
        <div className={classes.dob}>
          <b>Enter your DOB </b>
          <input type="date"></input>
        </div>
        <div className={classes.email}>
          <b>Enter your email </b>
          <input
            className={classes.inp}
            type="email"
            placeholder="xyz..@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>
        <div className={classes.password}>
          <b>Enter password </b>
          <input
            className={classes.inp}
            type="password"
            placeholder="...." value={password} onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className={classes.btn} onClick={submitHandler}>
            SUBMIT
          </button>
        
        </div>
        {signupSuccess && (
        <div className="success-message">Signup successful!</div>
      )}
      </div>
    </div>
  );
}
export default Signup;
