const { DataTypes } = require('sequelize'); const sequelize = require('./index');

const Usuario = sequelize.define('Usuario', { ID_User: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, Nombre: { type: DataTypes.STRING, allowNull: false }, Cargo: { type: DataTypes.STRING, allowNull: true }, Contrasena: { type: DataTypes.STRING, allowNull: false }, ID_Registro: { type: DataTypes.INTEGER, allowNull: true } }, { tableName: 'usuarios', timestamps: false });

module.exports = Usuario;