import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('{Add your MongoDB URI Here}/Your Project Name').then(()=>console.log("DB Connected"))
}