const chatService = require("../service/chat-service");

class SpeakerController {
    async createMessage(req, res, next) {
        try {
            const chatRoomId = req.params.id
            const {text, time, user} = req.body
            const chatData = await chatService.createMessage(chatRoomId, text, time, user)
            return res.json(chatData)
        } catch (e) {
            console.log(e)
        }
    }

    async getMessages(req, res, next) {
        try {
            const chatId = req.params.id
            const { limit, offset } = req.query
            const chatData = await chatService.getMessages(chatId, limit, offset)
            return res.json(chatData)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteMessage(req, res, next) {
        try {
            const {id} = req.params
            const chatData = await chatService.deleteMessage(id)
            return res.json(chatData)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new SpeakerController()