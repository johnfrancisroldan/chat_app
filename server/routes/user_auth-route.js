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
// successRedirect: '/',  // Redirect to the page if its success
//         failureRedirect: '/login',  // Redirect to the page if its failed
//         failureFlash: true,  // Enable failure Flash message
// Login Authentication
router.post('/login_user', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
                console.log('err: ', err);
                console.log('user: ', user);
                console.log('info: ', info);
                if (err) { return next(err); }
                if (!user) {
                        req.flash('error', info.message);
                        return res.json({ success: false, message: req.flash('error') });
                }
                req.logIn(user, (err) => {
                        if (err) { return next(err); }
                        return res.json({ success: true, message: 'Login successful' });
                });
        })(req, res, next);
});


// Login Authentication message
router.get('/login_auth', userAuthCtl.loginAuth);

// Registering User route
router.post('/register_user', userAuthCtl.registerUser);


// Export router in our app.js
export default router;


