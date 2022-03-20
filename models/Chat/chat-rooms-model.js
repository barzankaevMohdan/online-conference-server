const sequelize = require('../../db')
const {DataTypes} = require('sequelize')

const ChatRoom = sequelize.define('chat-room',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
})

module.exports = ChatRoom