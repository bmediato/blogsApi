const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);

  if (token.status) return res.status(token.status).json({ message: 'User already registered' });

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};