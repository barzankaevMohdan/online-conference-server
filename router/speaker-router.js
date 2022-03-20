const Router = require('express').Router
const speakerController = require('../controllers/speaker-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.get('/', authMiddleware, speakerController.getAllSpeakers)
router.post('/', authMiddleware, speakerController.createSpeaker)

module.exports = router
