const speakerService = require("../service/speaker-service");

class SpeakerController {
    async createSpeaker(req, res, next) {
        try {
            const {login, company_name, name, position, about, speechId} = req.body
            const speakerData = await speakerService.createSpeaker(login, company_name, name, position, about, speechId)
            return res.json(speakerData)
        } catch (e) {
            console.log(e)
        }
    }

    async updateSpeaker(req, res, next) {
        try {
            const {id} = req.params
            const {login, company_name, name, position, about, speechId} = req.body
            const speakerData = await speakerService.updateSpeaker(id, login, company_name, name, position, about, speechId)
            return res.json(speakerData)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteSpeaker(req, res, next) {
        try {
            const {id} = req.params
            const speakerData = await speakerService.deleteSpeaker(id)
            return res.json(speakerData)
        } catch (e) {
            console.log(e)
        }
    }

    async getAllSpeakers(req, res, next) {
        try {
            const speakers = await speakerService.getAllSpeakers()
            return res.json(speakers)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new SpeakerController()