/* ====== IMPORT MODULES ====== */
import express from 'express'; 
import dotenv from 'dotenv';  
import morgan from 'morgan'; 
import expressEjsLayouts from 'express-ejs-layouts'; 
import path from 'path'; 
import { fileURLToPath } from 'url';

/* ====== IMPORT USER ROUTERS ====== */
import userRoutes from "./server/routes/userRoutes.js";
import userAuth from "./server/routes/userAuthRoutes.js";

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
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());

// Create Shortcut call for calling directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Set Engine for views
app.set('view engine', "ejs"); 

// Set Views location
app.set('views', path.join(__dirname, 'views'));

app.set('layout', 'layouts/layout');

// To create a layout file to all html
app.use(expressEjsLayouts);

// Setting the public/assets files(css/img/js)
app.use(express.static(path.join(__dirname, '/assets')));



/* ====== PAGES ====== */

// User Pages
app.use('/', userRoutes);

// User Authentication Pages
app.use('/auth', userAuth);


// Make our application listen for incoming request
app.listen(PORT, ()=>{ console.log(`Server running at http://localhost:${PORT}`)});


