const Router = require('express').Router
const playerController = require('../controllers/player-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/', authMiddleware, playerController.createStreamRoom)
router.get('/', authMiddleware, playerController.getStreamRooms)

module.exports = router
