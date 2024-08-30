const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./signUp/Signup");

const app = express();
var cors = require("cors");

app.use(cors());

const PORT = 4000;
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://thogarukalyan2000:kalyan2000@cluster0.5dbrtic.mongodb.net/resume?"
  )
  .then(() => console.log("connected to db"));
  app.get("/get",(req,res)=>{
    return res.json({message:"working eqwww"})
  })
  app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username +" "+ email +" "+ password);
    const user1 =  await db.findOne({ email });
    if (user1) {
      return res.json({ User: "exsist try with login " });
    }
  
    db.create({ username, email, password });
  
    return res.json({ message: "connected" });
  });
  app.post("/login",async(req,res)=>{
    console.log("nott");
    const {username,password}=req.body;
    console.log(username,password);
    const password1 = await db.findOne({password});
    if(password1)
      {
        console.log("nott");
        return res.json({user : "found" });
        
      }
      else{
        console.log("nott_1_");
        return res.json({user:"Notfound"});
      }
  })
  app.listen(5000,(req,res)=>{
    console.log("server is running in 5000");
  })