const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Stream = sequelize.define('stream',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = Stream