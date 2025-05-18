const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Departamento = sequelize.define('Departamento', {
  ID_Dep: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Responsable: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'departamento',
  timestamps: false,
});

module.exports = Departamento;
