const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Message = sequelize.define('message',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING(1000), allowNull: false},
    time: {type: DataTypes.STRING, allowNull: false},
    user: {type: DataTypes.JSON, allowNull: false},
})

module.exports = Message