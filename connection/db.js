var Sequelize = require('sequelize');
var sequelize = new Sequelize('mecanica', 'root', 'Paodequeijo123@', { host: 'localhost', dialect: 'mysql'});

module.exports = sequelize;