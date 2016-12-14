const chalk = require('chalk')
const poemDb = require('./db');

const User = require('./user');
const Poem = require('./poem');

User.hasMany(Poem)
Poem.belongsTo(User)


module.exports = poemDb;


// Hello, I am a many to many relationship 	  *!!!!!REMEMBER NO CAMEL CASE!!!!!!*
// Category.belongsToMany(Product, { through: 'product_category' }) //(NO CAMELS)
// Product.belongsToMany(Category, { through: 'product_category' }) //(NO CAMELS)
