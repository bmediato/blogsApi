const { User } = require('../models');

const getByUser = async (email, password) => User.findOne({ where: { email, password } });

module.exports = {
  getByUser,
};