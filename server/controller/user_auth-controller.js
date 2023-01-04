// Import Modules
import tblUser from "../model/user-model.js";
import bcrypt from "bcrypt";



// Controller: Login Auth
export const loginAuth = async (req, res) => {
    // try{
    //     const response = await axios.get(`${BASE_URL}/login`)
    //     const msg = req.flash('error');
    //     const form = {
    //         email : req.body.email,
    //         password : req.body.email,
    //     }
    //     console.log('form: ', form);
    //     console.log('MESSAGE: ', msg);
    //     console.log('MAY LAMAN: ', msg.lenght !== 0);
    //     res.render('/login');
    // } catch(err){
    //     res.send(err)
    // }

    const msg = req.flash('error');
    const form = {
        email : req.body.email,
        password : req.body.email,
    }
    console.log('form: ', form);
    console.log('MESSAGE: ', msg);
    console.log('MAY LAMAN: ', msg.lenght !== 0);
    res.redirect('/login');
    

}


// Controller: Register User 
export const registerUser = async (req, res) => {
    // Validatation
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);

        // Fetch newUserData for tblUser
        const user = new tblUser({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashPassword,
            phone_num: req.body.phone_num,
            age: req.body.age,
            gender: req.body.gender
        });

        // Save New User Data
        const newUser = await user.save();

        res.redirect('/login');
   
    } catch(err) {
        res.status(500).send({
            message: err.message || 'Error found: Storing New user'
        })

    }

}