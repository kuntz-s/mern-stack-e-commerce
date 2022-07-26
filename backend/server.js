import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from "./config/db.js"

dotenv.config(); //allow to use environment variables on our project

connectDB() //connecting the database when starting the server

const app = express();

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`app is running properly in ${process.env.NODE_ENV} mode in port ${PORT}`));

app.get("/",(req,res) => {
    res.send("api is running ");
})

app.get("/products/:id",(req, res) => {
    const product = products.find(p=> p.id === req.params.id);
    res.json(product)
})