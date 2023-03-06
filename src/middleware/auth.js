const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'segredinho';

const createToken = (data) => {
  const JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '15min',
  };

  const token = jwt.sign({ data }, secret, JWT_CONFIG);
  return token;
};

module.exports = {
  createToken,
};