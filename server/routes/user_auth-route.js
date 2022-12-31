/* ====== IMPORT MODULES / METHODS  ====== */
import express from 'express';
import passport from 'passport';
import { initializeAuth } from "../config/passport-config.js";


// Import Methods: CONTROLLER
import * as userAuthCtl  from "../controller/user_auth-controller.js";

// Initializing the passport-local authentication
initializeAuth(passport);

// Initialize express router
const router = express.Router();

// Login authentication
router.post('/login_user', passport.authenticate('local',{
        successRedirect: '/',  // Redirect to the page if its success
        failureRedirect: '/login',  // Redirect to the page if its failed
        failureFlash: true,  // Enable failure Flash message
})); 

// Registering User route
router.post('/register_user', userAuthCtl.registerUser);


// Export router in our app.js
export default router;


