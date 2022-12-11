import mongoose from "mongoose";  // Import Mongoose Module

// Create User Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type:String,
        required:true
    },
    last_name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    phone_num: {
        type:String,
        required:true,
        unique:true
    },
    age: {
        type:Number,
        required:true
        
    },
    gender: String,
    img_path: {
        type: String,
        default: null
    },
    active_status: {
        type: String,
        default: 'Offline'
    }
        
})

// Users Table
const tblUser = mongoose.model("tblUser", userSchema);

// Export tblUser in our app.js
export default tblUser;