const {Message} = require('../models/models')

class ChatService {
    async createMessage(chatRoomId, text, time, user) {
        const chat = await Message.create({text, time, user, chatRoomId})
        return chat
    }

    async deleteMessage(id) {
        const chat = await Message.destroy({where: {id}})
        return chat
    }

    async getMessages(chatRoomId, limit, offsetClient) {
        const count = await Message.count({where: {chatRoomId}})
        // оффсет будет с конца массива
        let offset = count - limit - offsetClient
        offset = offset < 0 ? 0 : offset
        const chat = await Message.findAndCountAll({where: {chatRoomId}, limit, offset})
        return chat
    }
}

module.exports = new ChatService()