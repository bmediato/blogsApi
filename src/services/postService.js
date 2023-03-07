const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const post = await BlogPost.findAll({ 
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      }, 
      {
        model: Category,
        as: 'categories',
      },
    ], 
  });
  return post;
};

module.exports = {
  getAll,
};