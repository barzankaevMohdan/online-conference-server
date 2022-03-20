const {Speaker} = require('../models/models')

class SpeakerService {
    async createSpeaker(login, company_name, name, position, about, speechId) {
        const stream = await Speaker.create({login, company_name, name, position, about, speechId})
        return stream
    }

    async getAllSpeakers() {
        const streams = await Speaker.findAll()
        return streams
    }
}

module.exports = new SpeakerService()