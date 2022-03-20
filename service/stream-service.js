const {Stream} = require('../models/models')

class StreamService {
    async createStream(name) {
        const stream = await Stream.create({name})
        return stream
    }

    async getAllStreams() {
        const streams = await Stream.findAll()
        return streams
    }
}

module.exports = new StreamService()