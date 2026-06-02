import dotenv from 'dotenv'
import connectDB from './config/connection.js'
import { app } from './app.js'

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 5020;

app.get('/', (req,res) => {
    res.send("API Working.....")
})
app.get('/health', (req,res) => {
    res.ok({time: new Date().toISOString()}, "API is in good health...")
})

connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log('SERVER ERROR: ', error);
            throw error;
        })
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);          
        })
    })
    .catch((err) => {
        console.log('Mongo db connection failed: ', err);      
    })