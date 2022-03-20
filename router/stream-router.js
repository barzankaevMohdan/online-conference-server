const Router = require('express').Router
const streamController = require('../controllers/stream-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.get('/', authMiddleware, streamController.getAllStreams)
router.post('/', authMiddleware, streamController.createStream)

module.exports = router
