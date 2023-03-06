const userService = require('../services/user');
const { createToken } = require('../middleware/auth');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getByUser(email, password);

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);

  return res.status(200).json({ token });
};