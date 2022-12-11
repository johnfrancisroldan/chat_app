/* ====== IMPORT PACKAGES ====== */
import express from 'express'; // Import Express Module
import dotenv from 'dotenv';  // Import dotenv Module 
import morgan from 'morgan';  // Import morgan Module
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

/* ====== IMPORT USER ROUTERS ====== */
import userRoutes from "./server/routes/userRoutes.js"

/* ====== IMPORT MONGODB CONNECTION ====== */
import connectDB from './server/database/connection.js';

/* ====== INITIALIZE EXPRESS APP ====== */
const app = express();


// Configure config.env file
dotenv.config({path: 'config.env'});  

// Port of application and return 8080 if process.env.PORT return 'none'
const PORT = process.env.PORT || 8080; 


/* ====== LOAD MODULES/FILES ====== */

// Log HTTP Request
app.use(morgan('tiny'));

// MongoDB Connection
connectDB();

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());


// Set Engine for views
app.set('view engine', "ejs"); 

// Create Shortcut call for calling directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Assets Files and Create shortcut in paths
app.use("/css", express.static(path.join(__dirname, 'assets/css')));
app.use("/img", express.static(path.join(__dirname, 'assets/img')));
app.use("/js", express.static(path.join(__dirname, 'assets/js')));


/* ====== PAGES ====== */

// User Pages
app.use('/', userRoutes);



// Make our application listen for incoming request
app.listen(PORT, ()=>{ console.log(`Server running at http://localhost:${PORT}`)});


