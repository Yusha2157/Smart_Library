const express = require('express');
const Router = express.Router();
const AuthController = require('../controllers/AuthController');

// @name  -  RegisterUser
// @route -  POST /api/newUser
// @desc  -  Register new user
Router.route('/newUser').post(AuthController.register);

// @name  -  loginUser
// @route -  POST /api/loginUser
// @desc  -  Login user
Router.route('/loginUser').post(AuthController.login);

// @name  -  userInfo
// @route -  GET /api/me
// @desc  -  Fetch info of logged-in user
Router.route('/me').get(AuthController.verifyToken, AuthController.getCurrentUser);

module.exports = Router;
