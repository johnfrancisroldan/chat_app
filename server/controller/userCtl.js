/*
======================
   HANDLES API's
=====================
*/

/* ====== IMPORT USER DATABASE ====== */
import tblUser from '../model/userModel.js';

// Controller: Register User 
export const registerUser = (req,res) =>{
   // Validatation
   if(!req.body){
      res.status(400).send({message: "There is no Data to fetch"} )
      return;
   };
   console.log(req.body);

   // Fetch newUserData for tblUser
   const newUserData = new tblUser({
      first_name: req.body.first_name , 
      last_name: req.body.last_name,
      email: req.body.email ,
      password: req.body.password ,
      phone_num: req.body.phone_num ,
      age: req.body.age ,
      gender: req.body.gender
   });

   // Save New User Data
   newUserData
      .save(newUserData) // Store NewUserData
      .then(data=>{
         // Callback
         res.redirect('/register');
      })
      .catch(err=>{
         // Catch error
         res.status(500).send({
            message: err.message || 'Error found: Storing New user'
         })
      })
   
}

// Controller: Find User
export const viewUsers = (req, res) =>{
   // Fetch all users
   tblUser
      .find()
      .then(data =>{
         res.send(data);
      })
      .catch(err=>{
         res.status(500).send({message: err.message || 'Error found: Find User'});
      })
};


// Controller: Update User
export const updateUser = (req, res) =>{
   // Update specific User 
   const id = req.params.id;
   tblUser
      .findByIdAndUpdate(id, req.body, {useFindAndModify: false})
      .then(data => {
         if(!data){
            res.status(404).send({message: `Error found: User id: ${id} not found`});
         } else{
            res.send(data);
         }
      })
      .catch(err=>{
         res.status(500).send({message: 'Error found: Updating user'});
      })
};

// Controller: Delete User
export const deleteUser = (req, res) =>{
   // Delete Specific User
   const id = req.params.id;
   tblUser
      .findByIdAndDelete(id)
      .then(data => {
         if(!data){
            res.status(404).send({message: `Error found: Cannot Delete user id: ${id}`});
         } else{
            res.send({message: 'User succussfully Deleted!'});
         }
      })
      .catch(err=>{
         res.status(500).send({message: 'Error found: Deleting user'});
      })
   
};



