const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Joke = sequelize.define('Joke', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'jokes',
  timestamps: true 
});

module.exports = Joke;