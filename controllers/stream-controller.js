const streamService = require("../service/stream-service");

class StreamController {
    async createStream(req, res, next) {
        try {
            const {name} = req.body
            const streamData = await streamService.createStream(name)
            return res.json(streamData)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteStream(req, res, next) {
        try {
            const {id} = req.params
            const streamData = await streamService.deleteStream(id)
            return res.json(streamData)
        } catch (e) {
            console.log(e)
        }
    }

    async getAllStreams(req, res, next) {
        try {
            const streams = await streamService.getAllStreams()
            return res.json(streams)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new StreamController()