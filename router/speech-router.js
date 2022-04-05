const Router = require('express').Router
const speechController = require('../controllers/speech-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.get('/', authMiddleware, speechController.getAllSpeeches)
router.post('/', authMiddleware, speechController.createSpeech)
router.put('/:id', authMiddleware, speechController.updateSpeech)
router.delete('/:id', authMiddleware, speechController.deleteSpeech)

module.exports = router
