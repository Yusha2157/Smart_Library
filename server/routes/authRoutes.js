const express = require('express');
const Router = express.Router();

// @name  -  RegisterUser
// @route -  POST /api/newUser
// @desc - Register new user and assign the role of either admin or borrower to them

Router.route('/newUser').post((req , res) => {
    res.json({message : "User registration Working"});
})


// @name  -  loginUser
// @route -  POST /api/loginUser
// @desc - login user and assign the role of either admin or borrower to them

Router.route('/loginUser').post((req , res) => {
    res.json({message : "User login working"});
})

// @name  -  userInfo
// @route -  Get /api/me
// @desc - Fetch the information of the logged in User and display it to them

Router.route('/me').get((req , res) => {
    res.json({message : "User Information"});
})

module.exports = Router;