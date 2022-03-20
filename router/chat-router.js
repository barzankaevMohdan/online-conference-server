const Router = require('express').Router
const chatController = require('../controllers/chat-controller')
const router = new Router()
const authMiddleware = require('../middlewares/auth-middleware')

router.get('/:id', authMiddleware, chatController.getMessages)
router.post('/:id', authMiddleware, chatController.createMessage)

module.exports = router
