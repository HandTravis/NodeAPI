const express = require('express')
const mongoose = require('mongoose')
const Product = require ('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog, my name is Travis')
})

app.get('/products', async(req, res)=> {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
})

app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product){
            return res.status(404).json({message: 'cannot find any product with ID ${id}'})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://admin:2016474@travisapi.mmzwmwi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TravisAPI')
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(3000, ()=> {
            console.log('Node API app is running on port 3000')
        })

    }).catch((error) => {
        console.error(error)
    })