/* ====== IMPORT MODULES ====== */
import express from 'express'; 
import dotenv from 'dotenv';  
import morgan from 'morgan'; 
import expressEjsLayouts from 'express-ejs-layouts'; 
import path from 'path'; 
import { fileURLToPath } from 'url';

// User Authentication modules
import passport from 'passport';
import session from 'express-session';
import flash from 'express-flash';

/* ====== IMPORT USER ROUTERS ====== */
import userRoutes from "./server/routes/user-route.js";
import userAuth from "./server/routes/user_auth-route.js";

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

// Setting the public files(css/img/js)
app.use(express.static(path.join(__dirname, '/public')));


/* ====== USER AUTHENTICATION ====== */

// Show information message in authentication
app.use(flash());

// Save variables or current user data to entire page
app.use(session({
    secret: process.env.SESSION_KEY,  // Session key
    resave: false,  // Resaving our variable if nothing is change?
    saveUninitialized: false,  // Saving empty value in the session?
    cookie: {maxAge: 1000 * 60 * 60 * 24}  // Cookie expiry time set to one day
}))

app.use(passport.initialize());  // Initializing passport
app.use(passport.session());  // Saves the user inside the session

/* ====== PAGES ====== */

// User Pages
app.use('/', userRoutes);

// User Authentication Pages
app.use('/auth', userAuth);


// Make our application listen for incoming request
app.listen(PORT, ()=>{ console.log(`Server running at http://localhost:${PORT}`)});


