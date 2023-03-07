const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name);
  // console.log(newCategory);
  return res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
  const all = await categoryService.getAll();
  return res.status(200).json(all);
};

module.exports = {
  createCategory,
  getAll,
};