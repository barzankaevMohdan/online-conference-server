const speechService = require("../service/speech-service");

class SpeechController {
    async createSpeech(req, res, next) {
        try {
            const {title, info, time_begin, time_end, status, streamId} = req.body
            const speechData = await speechService.createSpeech(title, info, time_begin, time_end, status, streamId)
            return res.json(speechData)
        } catch (e) {
            console.log(e)
        }
    }

    async getAllSpeeches(req, res, next) {
        try {
            const speeches = await speechService.getAllSpeeches()
            return res.json(speeches)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new SpeechController()