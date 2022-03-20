const chatRoomService = require("../service/chat-room-service");

class ChatRoomController {
    async createRoom(req, res, next) {
        try {
            const {id} = req.body
            const room = await chatRoomService.createRoom(id)
            return res.json(room)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ChatRoomController()