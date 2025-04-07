const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const colors = require("colors")

const app = express()

// connecting to database


app.listen(8000 , () => {
    console.log(`Server listening to port : 8000 `);
})