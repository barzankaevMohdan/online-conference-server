const Router = require('express').Router
const chatRoomController = require('../controllers/chat-room-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/', authMiddleware, chatRoomController.createRoom)

module.exports = router
