import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
import dotenv from 'dotenv'

dotenv.config()

if(!process.env.MONGODB_URI) {
    throw new Error('Provide MONGO URI')
}

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        )

        console.log(
            `\nMONGODB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
        
    } catch (error) {
        console.log('MONGODB connection error: ', error);
        process.exit(1)       
    }
}

export default connectDB