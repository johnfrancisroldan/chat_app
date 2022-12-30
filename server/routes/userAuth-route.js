/* ====== IMPORT MODULES / METHODS  ====== */
import express from 'express';
import passport from 'passport';
import { initializeAuth , isNotAuthorized} from "../config/passport-config.js";


// Import Methods: CONTROLLER
import * as userAuthCtl  from "../controller/user_auth-controller.js";


initializeAuth(passport);

const router = express.Router();


router.post('/login_user', passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
})); 

// Registering User route
router.post('/register_user', userAuthCtl.registerUser);


// Export router in our app.js
export default router;


