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
    if (req.flash('error') != null){
        // STOP HERE: Find a way to determine if flash is empty or not
        return res.send(req.flash());
    }
    return res.render('userAuth/login');
}

// Login page 
// export const loginAuth = async (req, res) => {
//     try{
//         const response = await axios.get(`${baseUrl}/`);
//         if (response){
//             return res.send(response);
//         }
//     } catch(err){

//     }
// }

// Register Page 
export const registerPage =  (req,res) =>{
    res.render('userAuth/register');
};