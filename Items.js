import React from "react";
import classes from './Items.module.css';
import { useNavigate } from "react-router-dom";
import logo from '../Homepage/img1.jpg';


function Items(props)
{
  let navigate = useNavigate()
  function buyHandler()
  {
        navigate('/Buy')
  }
  return(
    <div className ={classes.main}>
      <div><b>BrandName : </b><b>{props.brand}</b></div>
      <div><b>ModelName : </b><b>{props.model}</b></div>
      <div>{props.img}</div>
      <div><b>BestPrice: </b><b>{props.price}</b></div>
      <div><button type="submit" className={classes.btn} onClick={buyHandler}>Buy</button></div>
    </div>
  )
}
export default Items