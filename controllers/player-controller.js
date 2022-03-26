const playerService = require("../service/player-service");
const streamService = require("../service/stream-service");

class PlayerController {
    async createStreamRoom(req, res, next) {
        try {
            const {roomId, streamId} = req.body
            const roomData = await playerService.createStreamRoom(roomId, streamId)
            return res.json(roomData)
        } catch (e) {
            console.log(e)
        }
    }

    async getStreamRooms(req, res, next) {
        try {
            const rooms = await playerService.getAllStreamsRoom()
            return res.json(rooms)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PlayerController()