// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//Looked back at 21 ins one to one to get these correct
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
//Looked back at 23 ins one to many
Product.hasMany(Category, {
  foreginKey: "category_id"
});
// Products belongToMany Tags (through ProductTag)
//Used link below to help with these last 2
//https://sequelize.org/docs/v7/associations/belongs-to-many/
Product.belongsTo(Tag, {
  through: ProductTag,
  as: "productTag_tag",
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "productTag_product",
  foreginKey: "tag_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
