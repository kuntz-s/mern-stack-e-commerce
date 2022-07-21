const express = require('express');
const products = require('./data/products')

const app = express();

app.listen(3001, console.log("app is running properly"));

app.get("/",(req,res) => {
    res.send("api is running ");
})

app.get("/products/:id",(req, res) => {
    const product = products.find(p=> p.id === req.params.id);
    res.json(product)
})