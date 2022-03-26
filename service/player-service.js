const {Player} = require('../models/models')

class PlayerService {
    async createStreamRoom(roomId, streamId) {
        const stream = await Player.create({id: roomId, streamId})
        return stream
    }

    async getAllStreamsRoom() {
        const rooms = await Player.findAll()
        return rooms
    }
}

module.exports = new PlayerService()