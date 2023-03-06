const express = require('express');
const loginValidation = require('../middleware/loginValidation');
const { loginController, userController } = require('../controllers');
const {
  displayValidation,
  emailValidation,
  passwordValidation,
} = require('../middleware/userValidation');
const { verifyToken } = require('../middleware/auth');

const userRouter = express.Router();

userRouter.post('/login', loginValidation, loginController);
userRouter.post('/user', 
  displayValidation, 
  emailValidation, 
  passwordValidation, userController.createUser);
userRouter.get('/user', verifyToken);

module.exports = userRouter;