import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import helmet from 'helmet'
import morgan from 'morgan';
import { errorHandler } from './utils/errorHandler.js'

const app = express()

//middlewares
app.use(helmet({
    crossOriginResourcePolicy: false
}))
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
console.log("Allowed CORS Origin:", process.env.FRONTEND_URL);

app.use(errorHandler)
export { app }