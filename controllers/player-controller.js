const playerService = require("../service/player-service");
const streamService = require("../service/stream-service");

class PlayerController {
    async createStreamRoom(req, res, next) {
        try {
            const {streamId} = req.body
            const roomData = await playerService.createStreamRoom(streamId)
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

    async deleteStreamRoom(req, res, next) {
        try {
            const id = req.params.id
            const roomData = await playerService.deleteStreamRoom(id)
            return res.json(roomData)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PlayerController()