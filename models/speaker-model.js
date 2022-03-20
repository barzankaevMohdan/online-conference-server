const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Speaker = sequelize.define('speaker',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, allowNull: false},
    company_name: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, allowNull: false},
    position: {type: DataTypes.STRING},
    about: {type: DataTypes.STRING},
})

module.exports = Speaker