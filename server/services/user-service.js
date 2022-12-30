/*
======================
   RENDERING PAGES
=====================
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

// Home Page
export const homePage =  (req, res) =>{
    axios.get(`${baseUrl}/api/view_user`)
        .then(function(response){
            res.render('users/home',{users:response.data, name: req.user.first_name})
        })
        .catch(err=>{
            res.send(err)
        })
    
    
};
