import express from "express";   // Import Express Module

// Import User Pages Services Method
import { loginPage, registerPage, homePage } from "../services/user-service.js";

// Import User's API Controllers Methods
import * as userAPI  from "../controller/user-controller.js";

// Import Passport configuration
import { isAuthorized, isNotAuthorized } from "../config/passport-config.js";

// Initialize Express Router
const router = express.Router();




// /* ====== PAGES ====== */

// Home Page
router.get('/', isAuthorized, homePage);

// Login Page
router.get('/login', isNotAuthorized, loginPage);


// Register Page
router.get('/register', isNotAuthorized, registerPage);

// /* ====== API's ====== */
// Find Users Route
router.get('/api/view_user', userAPI.viewUsers);

// // Update Users Route
// router.put('/api/updateUser/:id', userAPI.updateUser);

// // Delete Users Route
// router.delete('/api/deleteUser/:id', userAPI.deleteUser);


// Export router in our app.js
export default router;