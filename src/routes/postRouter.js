const express = require('express');
const { verifyToken } = require('../middleware/auth');
const { postController } = require('../controllers');

const postRouter = express.Router();

postRouter.get('/post', verifyToken, postController.getAll);

module.exports = postRouter;