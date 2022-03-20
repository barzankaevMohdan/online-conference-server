const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Speech = sequelize.define('speech',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    info: {type: DataTypes.STRING, allowNull: false},
    time_begin: {type: DataTypes.STRING, allowNull: false},
    time_end: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
})

module.exports = Speech