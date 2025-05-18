const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Empleado = sequelize.define('Empleado', {
  ID_Emp: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Cargo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ID_Dep: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'empleado',
  timestamps: false,
});

module.exports = Empleado;
