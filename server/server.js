const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const colors = require("colors")
const connectDb = require('./config/db.js')

const app = express()

// connecting to database
connectDb();
    

app.use('/api/users' , require('./routes/authRoutes'));


app.listen(8000 , () => {
    console.log(`Server listening to port : 8000 `);
})