const express = require('express');
const { verifyToken } = require('../middleware/auth');
const { nameValidation } = require('../middleware/categoryValidation');
const { categoryController } = require('../controllers');

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', 
  verifyToken, 
  nameValidation, 
  categoryController.createCategory);

module.exports = categoriesRouter;