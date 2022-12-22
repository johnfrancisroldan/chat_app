import express from "express";   // Import Express Module

// Import User Pages Services Method
import { loginPage, registerPage, homePage } from "../services/userPages.js";

// Import User's API Controllers Methods
import * as userAPI  from "../controller/userCtl.js";

// Initialize Express Router
const router = express.Router();


router.get("/", (req, res) => {
    res.render('index');
});


// /* ====== PAGES ====== */

// // Home Page
// router.get('/', homePage);


// /* ====== API's ====== */
// Find Users Route
router.get('/api/view_user', userAPI.viewUsers);

// // Update Users Route
// router.put('/api/updateUser/:id', userAPI.updateUser);

// // Delete Users Route
// router.delete('/api/deleteUser/:id', userAPI.deleteUser);


// Export router in our app.js
export default router;