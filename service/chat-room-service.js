const {ChatRoom} = require('../models/models')

class ChatService {
    async createRoom(id) {
        const room = await ChatRoom.create({id})
        return room
    }
}

module.exports = new ChatService()