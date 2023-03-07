const { User } = require('../models');
const { createToken } = require('../middleware/auth');

const getByUser = async (email, password) => User.findOne({ where: { email, password } });

const createUser = async (user) => {
  const { email, password, displayName, image } = user;
  const findEmail = await User.findOne({ where: { email } });
  if (findEmail) return { status: 409 };
  await User.create({ email, password, displayName, image });
  const token = createToken(user.email);
  return token;
};

const getAll = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  getByUser,
  createUser,
  getAll,
  getById,
};