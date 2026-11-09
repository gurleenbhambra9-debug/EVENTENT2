import mongoose from "mongoose";

const customerSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    emailAddress:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    preferredContactMethod:{
        type:String,
        enum:['WhatsApp', 'Phone Call', 'Email']
    },
    preferredLanguage:{
        type:String,
        enum:['Hindi', 'English', 'Punjabi'],
        default:"English"
    }
}, {
    timestamps:true
})

const customer= mongoose.model("customer", customerSchema)
export default customer