/* ====== IMPORT MODULES / METHODS  ====== */
import express from 'express';

// Import Methods: CONTROLLER
import * as userCtl  from "../controller/user-controller.js";


const router = express.Router();

/* ====== API's ====== */
router.post('/register_user', userCtl.registerUser);

// Export router in our app.js
export default router;


