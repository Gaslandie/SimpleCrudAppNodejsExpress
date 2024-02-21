const express = require('express') //import express
const mongoose = require('mongoose') //import mongoose 
const productRoutes = require('./routes/productRoute')
const Product = require('./models/products')
require('dotenv').config();
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));//telling express to take in charge the analysis of html form and authorize complexe object like array ou nested object

//routes
app.use('/api/products',productRoutes);

app.get('/', (req, res) => {
    res.send('hello you!')
})

//connection to the dataBase
mongoose.connect(`${process.env.DB_URL}`)
    .then(() => {
        console.log('connection successful');
        app.listen(4000, () => {
            console.log('Server is running on port 4000')
        })

    })
    .catch((error) => console.error("connection to the database failed",error.messsage));