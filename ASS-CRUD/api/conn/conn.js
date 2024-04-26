import mongoose from "mongoose";

export const conn =()=>{
    mongoose.connect(process.env.MONGO_URI).then(status=>{
        console.log("Mongo:database connection establisted successfully")
    })
}