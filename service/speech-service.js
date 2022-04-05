const {Speech} = require('../models/models')

class SpeechService {
    async createSpeech(title, info, time_begin, time_end, status, streamId) {
        const speech = await Speech.create({title, info, time_begin, time_end, status, streamId})
        return speech
    }

    async getAllSpeeches() {
        const speech = await Speech.findAll()
        return speech
    }

    async updateSpeech(id, title, info, time_begin, time_end, status) {
        const speech = await Speech.update({title, info, time_begin, time_end, status}, {where: {id}})
        return speech
    }

    async deleteSpeech(id) {
        const speech = await Speech.destroy({where: {id}})
        return speech
    }
}

module.exports = new SpeechService()