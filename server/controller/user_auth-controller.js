// Import Modules
import {initialize as initializeAuth} from "../config/passport-config.js";
import passport from "passport";
import tblUser from "../model/user-model.js";




// Controller: Login User
export const loginUser = (req, res) => {
   
    initializeAuth(
        passport,
        userEmail => tblUser.find(user => email === email),
        userId => tblUser.find(user => id === id)
    );

}


// Controller: Register User 
export const registerUser = async (req, res) => {
    // Validatation
    try {
        // Fetch newUserData for tblUser
        const user = new tblUser({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone_num: req.body.phone_num,
            age: req.body.age,
            gender: req.body.gender
        });

        // Save New User Data
        const newUser = await user.save()

        // res.redirect('/login');
        res.send('SAVE');
    } catch {
        res.status(500).send({
            message: err.message || 'Error found: Storing New user'
        })

    }

}