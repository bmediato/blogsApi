const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name);
  // console.log(newCategory);
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};