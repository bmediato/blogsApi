const { postService } = require('../services');

const getAll = async (req, res) => {
  const post = await postService.getAll();
  return res.status(200).json(post);
};

module.exports = {
  getAll,
};