import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI as string || "mongodb:// localhost:27017/recipes_db");  
        console.log(`MongoDB Connected: ${conn.connection.host}`); 
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};