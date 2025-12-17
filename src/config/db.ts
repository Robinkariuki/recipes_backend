import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI as string || "mongodb://127.0.0.1:27017/recipe");  
        console.log(`MongoDB Connected: ${conn.connection.host}`); 
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};


