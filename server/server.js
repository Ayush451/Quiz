import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./database/conn.js";
import mongoose from "mongoose";

const app = express()

// app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();
mongoose.set('strictQuery', true);

// application port 
const port = process.env.PORT || 8080


// Routes
app.use('/api', router) //API



app.get('/', (req,res)=>{
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error);
    }
})

//Start server when there is valid connection
connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server Connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the database")
    }

}).catch(error =>{
    console.log("Invalid Database connection")
})

