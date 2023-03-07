const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  // console.log(newCategory);
  return newCategory; 
};

const getAll = async () => {
  const all = await Category.findAll();
  return all;
};

module.exports = {
  createCategory,
  getAll,
};