/*
=========================================
   RENDERING USER AUTHENTICATION PAGES
=========================================
*/

import axios from 'axios';


const BASE_URL = 'http://localhost:8080';

// Login page 
export const loginPage =  (req, res) => {
    // const msg = req.flash();
    // console.log(msg);
    res.render('userAuth/login');
    

}


// Register Page 
export const registerPage =  (req,res) =>{
    res.render('userAuth/register');
};