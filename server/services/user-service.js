/*
======================
   RENDERING PAGES
=====================
*/
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

// Home Page
export const homePage =  async (req, res) =>{
    axios.get(`${baseUrl}/api/view_user`)
        .then(function(response){
            res.render('users/home',{users:response.data, name: req.user.first_name})
        })
        .catch(err=>{
            res.send(err)
        })
    
    // try {
    //     const response = await axios.get(`${baseUrl}/api/view_user`);
    //     if (response){
    //         res.render('')
    //     }
    // } catch(err){
        
    // };
    
    
    
};
