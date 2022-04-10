const {Player} = require('../models/models')

class PlayerService {
    async createStreamRoom(streamId) {
        const stream = await Player.create({streamId})
        return stream
    }

    async getAllStreamsRoom() {
        const rooms = await Player.findAll()
        return rooms
    }

    async deleteStreamRoom(id) {
        const room = await Player.destroy({where: {id}})
        return room
    }
}

module.exports = new PlayerService()