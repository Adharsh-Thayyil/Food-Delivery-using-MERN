import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Adharsh_Thayyil:Iamadharsh7!@cluster0.qdwpd4t.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"))
}