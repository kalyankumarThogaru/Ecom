import React from "react";
import classes from './Nav.module.css'
import { useNavigate } from "react-router-dom";


function Nav()
{
  let navigate = useNavigate()
  function LoginHandler()
  {
    navigate('/Login')

  }
  return(
    <div >
      <div>

        <ul >
          <li><b>Flipkart++</b></li>
          <li><input type="text" placeholder="Search For Something"></input></li>
          <li><button type="submit"  onClick={LoginHandler}className={classes.btn}>LOGIN</button></li>
        </ul>
      </div>


    </div>
  )
}
export default Nav