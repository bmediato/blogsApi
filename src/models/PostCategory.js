module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    tableName: 'posts_categories',
    timestamps: false, 
    underscored: true,
  });
  PostCategory.associate = ({Category, BlogPost}) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
      Category.belongsToMany(BlogPost, {
        as:'blogposts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
  }
  return PostCategory;
}