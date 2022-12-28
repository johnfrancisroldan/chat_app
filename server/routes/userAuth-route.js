/* ====== IMPORT MODULES / METHODS  ====== */
import express from 'express';

// Import Methods: CONTROLLER
import * as userAuthCtl  from "../controller/user_auth-controller.js";


const router = express.Router();


// Login User route
router.post('/login_user', userAuthCtl.loginUser);

// Registering User route
router.post('/register_user', userAuthCtl.registerUser);


// Export router in our app.js
export default router;


