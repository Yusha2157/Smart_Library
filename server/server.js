const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const colors = require("colors")

const app = express()

// connecting to database
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     }).then(() => {
//         console.log("Connected to MongoDB".green)
//     }).catch(err => {
//             console.log("Error connecting to MongoDB".red)
//     })
    

app.use('/api/users' , require('./routes/authRoutes'));


app.listen(8000 , () => {
    console.log(`Server listening to port : 8000 `);
})