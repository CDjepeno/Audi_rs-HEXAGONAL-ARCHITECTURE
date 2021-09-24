import mongoose from "mongoose";
import config from "../config/config";

export async function connectDb(mongoUri: string) {

    return await mongoose.connect(mongoUri).then(() => console.log('connected to database'))
}