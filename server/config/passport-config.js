import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';


function initialize (passport, userEmail, userId){
    /* Initializing User Authentication using passport module*/ 

    // Checking the user email and password
    const authenticationUser = async (email, password, done) =>{
        /* User's Email and Password validation*/ 

        const currentUser = userEmail(email);
        // Check user's Email
        if (currentUser == null){
            return done(null, false, {message: "Invalid email, Please check your email"});
        };

        // Check user'sPassword
        try{
            // Check if the password is match
            if (await bcrypt.compare(passowrd, user.password)){
                return done(null, user);
            }else{
                // Show message if password is incorrect
                return done(null, false, {message: "Incorrect password, Please try again"});
            }
        }catch(e){
            // Show error message if we have error
            return done(e);
        };

    };

    // Setting the Authentication for User
    passport.use(new LocalStrategy ({ usernameField: 'email'}, authenticationUser));

    // Saving the Current User ID in Session
    passport.serializeUser((user, done) => done(null, user.id)); 

    // Unsaving the Current User ID in Session
    passport.unserializeUser((id, done) => {
        return done(null, userId(id));
    });
};

