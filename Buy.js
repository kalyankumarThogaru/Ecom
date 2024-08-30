import React from "react";
import classes from './Buy.module.css';
import { useNavigate } from "react-router-dom";



function Buy()
{
  let navigate= useNavigate()
  function buyHandler()
  {
        navigate('/Homepage')
  }
  return(
    <div className={classes.buy}>
      <div><h1><b>Thank you for buying this product</b></h1></div>
      <div><button type="submit" className={classes.btn} onClick={buyHandler}>BACK</button></div>
    </div>
   
  )
}
export default Buy