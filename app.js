// import express
const express = require('express');

// import mongoose
const mongoose = require('mongoose');

// import dotenv
require('dotenv').config();
const p = process.env

// connect to the database
mongoose.connect(`mongodb+srv://${p.USER}:${p.PASSWORD}@${p.CLUSTER}/?retryWrites=true&w=majority&appName=${p.DATABASE}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connect to MongoDB successful !'))
    .catch((error) => console.log('Connect to MongoDB failed !'));

// create an express app
const app = express();

// cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// simple middleware
app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
})

// export the express app
module.exports = app;