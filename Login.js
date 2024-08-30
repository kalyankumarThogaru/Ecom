import React from "react";
import classes from './Login.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



function Login()
{
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  let navigate = useNavigate()
  async function submitHandler(e)
  {
    e.preventDefault();
    console.log("nott");
    try{
      await axios.post("http://localhost:5000/login",{
        username:username,
        password:password
      })
  
    }
    catch{
      console.log("not there");
    }
    navigate('/Homepage')

  }
  function SignupHandler()
  {
    navigate('/Signup')
  }
  
  return(
    <div className={classes.main}>
      <div className={classes.login}> 
        <div className={classes.email}><b>Enter your email</b><input className={classes.inp} type="text"  value={username} onClick={(e)=>{setUsername(e.target.value)}}placeholder=""></input></div>
  
    
        <div className={classes.password}><b>Enter password</b><input className={classes.inp} type="password" placeholder="...."value={password} onClick={(e)=>{setPassword(e.target.value)}}></input></div>
        <br></br>
        <div className={classes.buttons}>
          <div><button type="submit" className={classes.btn} onClick={submitHandler}>SUBMIT</button></div>
          <div><button type="submit" className={classes.btn} onClick={SignupHandler} >SIGNUP</button></div>
        </div>
        
         
      </div>
    </div>
  )
}
export default Login