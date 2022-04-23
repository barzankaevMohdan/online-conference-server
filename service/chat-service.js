const {Message} = require('../models/models')

class ChatService {
    async createMessage(text, time, user, streamId) {
        const chat = await Message.create({text, time, user, streamId})
        return chat
    }

    async deleteMessage(id) {
        const chat = await Message.destroy({where: {id}})
        return chat
    }

    async getMessages(streamId, limit, offsetClient) {
        const count = await Message.count({where: {streamId}})
        // offset будет с конца массива
        let offset = count - limit - offsetClient
        offset = offset < 0 ? 0 : offset
        const chat = await Message.findAndCountAll({where: {streamId}, limit, offset})
        return chat
    }
}

module.exports = new ChatService()