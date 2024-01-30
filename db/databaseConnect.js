import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
    };
    console.log(DB_OPTIONS)
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database Connections Sucessfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
