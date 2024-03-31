import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()
mongoose.connect(process.env.MONGODB_PATH, () => {
}, (e) => console.log(e))



const PORT = process.env.SERVER_PORT || 9000
const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

const app = express()

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!');
}); 
// Define a route for the root URL
app.get('/new', (req, res) => {
    res.send('this is new!');
}); 

// app.use(cors({
//     origin
// }));
   
// Addings CORS middleware with specific origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://project-planner1203.netlify.app');
    next();
  });



app.use(express.json())
app.use(express.urlencoded())

app.use(api)


app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}`)
})