const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Player = sequelize.define('player',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
})

module.exports = Player