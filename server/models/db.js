const Sequelize = require('sequelize');

const poemDb = new Sequelize('postgres://localhost:5432/poemDb', {
})

module.exports = poemDb;