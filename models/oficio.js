const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Oficio = sequelize.define('Oficio', {
  ID_Oficio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numero_oficio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fecha_emision: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  asunto: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  remitente_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  departamento_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  estatus: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  firma: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ccp: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'oficio',
  timestamps: false
});

module.exports = Oficio;

