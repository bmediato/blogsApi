const { userService } = require('../services');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);

  if (token.status) return res.status(token.status).json({ message: 'User already registered' });

  return res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const all = await userService.getAll();

  return res.status(200).json(all);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAll,
  getById,
};