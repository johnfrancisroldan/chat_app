import mongoose from "mongoose";  // Import Mongo module

// Hide Unwanted warnings
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try{
        // MongoDb Connection
        const con = await mongoose.connect(process.env.MONGO_URI);

        // Show MongoDB Host
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        // Show Error
        console.log(err);
        process.exit(1);  // Exit
    }

};

// Export connectDB in our app.js
export default connectDB;