// Import needed modules/files
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import tblUser from '../model/user-model.js';


export const initializeAuth = (passport) => {
    /* Initializing User Authentication using passport(local) module*/ 

    // Checking the user email and password
    const authenticationUser =  async (username, password, done) =>{
        /* User's Email and Password validation*/ 

        try {
            const currentUser = await tblUser.findOne({ email: username })
            if (currentUser == null){
                return done(null, false, {message: "Invalid email, Please check your email"});
            } else {
                 // Check if the password is match
                if (await bcrypt.compare(password, currentUser.password)) {
                    return done(null, currentUser);
                } else {
                    // Show message if password is incorrect
                    return done(null, false, { message: "Incorrect password, Please try again" });
                }
            }

        } catch (err){
            // Show error message if we have error
            // Create  a error message page 
            return done(err);
        }
        

    };

    // Setting the Authentication for User
    passport.use(new LocalStrategy ({ usernameField: 'email'}, authenticationUser));

    // Saving the Current User ID in Session
    passport.serializeUser((user, done) => done(null, user._id)); 

    // Unsaving the Current User ID in Session
    passport.deserializeUser(async (id, done) => {
        try{
            const currentUser = await tblUser.findById(id);  // Find Current User

            // Checking if user is existing
            if (currentUser == null){
                return done(null, false, {message: "Current User not found."})
            } else {
                return done(null, currentUser);
            }
           
            
        } catch (err){
            // Show error message if we have error
            return done(err);
        }
        
    });
};

export const isAuthorized = (req, res, next) =>{
    /* Restricting the user's to go only in Authenticated Pages*/ 

    //  Check if the user is Authenticated
    if (req.isAuthenticated()){
        return next();  // Continue in the page
    }
    
    //  Go back in login if user is not authenticated
    res.redirect('/login');
};

export const isNotAuthorized = (req, res, next) =>{
    /* Restricting the non user's to go in Unauthenticated Pages*/ 

    //  Check if the user is not Authenticated
    if (req.isAuthenticated()){
        return res.redirect('/');  //  Go back in Home pagge if user is authenticated
    }

    next();  // Continue in the page
};


