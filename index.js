const express = require('express') //import express
const mongoose = require('mongoose') //import mongoose 
const Product = require('./models/products')
require('dotenv').config();
const app = express() 


app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello you!')
})

//post product
app.post('/api/product', async (req,res)=>{
     try {
        const product = await Product.create(req.body)
        res.status(201).json(product);
     } catch (error) {
        res.status(500).json({mess: error.message});
     }
})
//get All products
app.get('/api/products',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({mess: error.message});
    }
})

//get product by id
app.get('/api/product/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({mess:error.message});
    }
})
//update a product
app.put('/api/product/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const product = Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"product not found"});
        }
    } catch (error) {
        res.status(500).json({mess:error.message});
    }
})

mongoose.connect(`${process.env.DB_URL}`)
.then(() => {
    console.log('connection successful');
    app.listen(4000,()=>{
        console.log('Server is running on port 4000')
    })
    
  })
.catch(()=>console.log("connection failed"))