import React from "react";
import classes from './Homepage.module.css';
import logo from './img1.jpg'
import iphone from './iphone.jpg'
import Items from "../Items/Items";
import poco from './poco.png';
import realme from './realme.png'
import vivo from './vivo.jpg';
import laptop from './laptop.jpg';
import tabs from './tab.jpg'
function Homepage()
{
  return(
    <div className={classes.main}>
      <div className={classes.top}>
        <p ><b>Trending phones</b></p>
        <div className={classes.row}><Items brand="POCO" model ="X3PRO"  price ="19,000/-" img = {<img src={poco}   />} /><Items brand="IPHONE" model ="14PRO" price ="109,000/-" img = {<img src={iphone}/>} /><Items brand="REALME" model ="5G" price ="19,000/-" img = {<img src={realme}/>}/><Items brand="VIVO" model ="15"  price ="18,000/-"img = {<img src={vivo}/>}/></div>
      </div>
      <div className={classes.middle}>
        <p><b>Trending Laptops</b></p>
        <div className={classes.row}><Items brand="MACBOOK" model ="I5" price ="159,000/-" img ={<img src={laptop}/>}/><Items brand="LENOVO" model ="RYZEN3"  price ="39,000/-"img ={<img src={laptop}/>}/><Items brand="DELL" model ="I5"  price ="49,000/-"img ={<img src={laptop}/>}/><Items brand="PIVILION" model ="I7" price ="89,000/-" img ={<img src={laptop}/>}/></div>
      </div>
      <div className={classes.bottom}>
        <p><b>Trending Ipads</b></p>
        <div className={classes.row}><Items brand="TAB" model ="126GB" price ="39,000/-"  img ={<img src={tabs}/>}/><Items brand="TAB" model ="256GB" price ="59,000/-" img ={<img src={tabs}/>}/><Items brand="TAB" model ="512GB"  price ="69,000/-"img ={<img src={tabs}/>}/><Items brand="TAB" model ="1 TERA" price ="79,000/-" img ={<img src={tabs}/>}/></div>
      </div>

      
    </div>
  )
}
export default Homepage