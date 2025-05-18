const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'WTPuxFfwHyfevwibhqvNzRQnBtZtZBaD', {
  host: 'switchyard.proxy.rlwy.net',
  port: 21013,
  dialect: 'mysql'
});

module.exports = sequelize;
