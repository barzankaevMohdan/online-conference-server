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

    async updateSpeaker(id, login, company_name, name, position, about, speechId) {
        const speaker = await Speaker.update({login, company_name, name, position, about, speechId}, {where: {id}})
        return speaker
    }

    async deleteSpeaker(id) {
        const speaker = await Speaker.destroy({where: {id}})
        return speaker
    }
}

module.exports = new SpeakerService()