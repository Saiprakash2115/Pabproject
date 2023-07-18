const mongoose = require("mongoose")

const productSchema = new mongoose.Schema( { 
    
        typeOfRegistration: {
            type:String,
            require:true
        },
        fullName: {
            type:String,
            require:true
        },
        email: {
            type:String,
            require:true
        },
        mobileNumber: {
            type:Number,
            require:true
        },
        gender: {
            type:String,
            require:true
        },
    })

const userData=mongoose.model("userData",productSchema)

module.exports = userData;

