import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = mongoose.connect(process.env.DATABASE_URL)

export default connectDB;