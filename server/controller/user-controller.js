/*
======================
   HANDLES API's
=====================
*/

/* ====== IMPORT USER DATABASE ====== */
import tblUser from '../model/user-model.js';

// Controller: Register User 
export const registerUser = async (req,res) =>{
   // Validatation
   try {
      // Fetch newUserData for tblUser
      const user = new tblUser({
         first_name: req.body.first_name , 
         last_name: req.body.last_name,
         email: req.body.email ,
         password: req.body.password ,
         phone_num: req.body.phone_num ,
         age: req.body.age ,
         gender: req.body.gender
      });

      // Save New User Data
      const newUser = await user.save()

      res.redirect('/login');

   } catch{
      res.status(500).send({
         message: err.message || 'Error found: Storing New user'
      })

   }
   
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



