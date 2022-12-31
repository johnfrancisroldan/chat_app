/*
=========================================
   RENDERING USER AUTHENTICATION PAGES
=========================================
*/

import axios from 'axios';

const baseUrl = 'http://localhost:8080';

// Login page 
export const loginPage = (req, res) => {
    console.log('MESSAGE: ', req.flash())
    res.render('userAuth/login');
}

// Register Page 
export const registerPage =  (req,res) =>{
    res.render('userAuth/register');
};