/* ====== IMPORT MODULES / METHODS  ====== */
import express from 'express';

// Import Methods: CONTROLLER
import * as userAPI  from "../controller/userCtl.js";

// Impoer Methods: SERVICES
import { loginPage, registerPage } from '../services/userPages.js';

const router = express.Router();


// Login Page
router.get('/login', loginPage);

// Register Page
router.get('/register', registerPage);


/* ====== API's ====== */
router.post('/api/register_user', userAPI.registerUser);

// Export router in our app.js
export default router;


