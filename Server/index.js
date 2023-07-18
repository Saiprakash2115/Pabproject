
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const registeredData = require ("./registeredData");
const userData = require("./registeredData");
const app = express()

app.use(express.json())
app.use(cors())

//mongodb connection//
 mongoose.connect("mongodb+srv://saiprakash2115:m1Yb7ZlsB0nVVGbY@cluster0.r19eo2o.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log("DB Connected")).catch((err)=>console.log(err.message))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/Signupform", async(req,res)=>{
    console.log(req.body)
    try{
        const newUser={
            typeOfRegistration:req.body.typeOfRegistration,
            fullName:req.body.fullName,
            email:req.body.email,
            password:req.body.password,
            mobileNumber:req.body.mobileNumber,
            gender:req.body.gender,
        }
       const userDetails = await userData.create(req.body)
       res.status(200).send("User created successfully")
    }catch(e){
        console.log(e.message)
         return res.status(500).json({message: e.message})
    }
})

app.listen(3004,()=>{
    console.log("Server running at 3004")
})