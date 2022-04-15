const {Stream} = require('../models/models')

class StreamService {
    async createStream(name) {
        const stream = await Stream.create({name})
        return stream
    }

    async deleteStream(id) {
        const stream = await Stream.destroy({where: {id}})
        return stream
    }

    async getAllStreams() {
        const streams = await Stream.findAll()
        return streams
    }
}

module.exports = new StreamService()