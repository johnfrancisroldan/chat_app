/*
======================
   RENDERING PAGES
=====================
*/
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

// Login page 
export const loginPage = (req, res) =>{
    res.render('login');
}

// Register Page 
export const registerPage =  (req,res) =>{
    res.render('register');
};

// Home Page
export const homePage =  (req, res) =>{
    axios.get(`${baseUrl}/api/view_user`)
        .then(function(response){
            res.render('home',{users:response.data})
        })
        .catch(err=>{
            res.send(err)
        })
    
    
};
