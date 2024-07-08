const express = require('express')
const mongoose = require('mongoose')
const Product = require ('./models/productModel')
const app = express()

app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog my name is Travis')
})

app.post('/product', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

mongoose.
connect('mongodb+srv://admin:2016474@travisapi.mmzwmwi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TravisAPI')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000')
    })

}).catch((error) => {
    console.log(error)
})