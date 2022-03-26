const Router = require('express').Router
const router = new Router()
const authRouter = require('./auth-router')
const streamRouter = require('./stream-router')
const speakerRouter = require('./speaker-router')
const speechRouter = require('./speech-router')
const chatRouter = require('./chat-router')
const chatRoomRouter = require('./chat-room-router')
const playerRouter = require('./player-router')

router.use('/user', authRouter)
router.use('/streams', streamRouter)
router.use('/speakers', speakerRouter)
router.use('/speeches', speechRouter)
router.use('/chat_room', chatRoomRouter)
router.use('/chat_rooms', chatRouter)
router.use('/stream/room', playerRouter)

module.exports = router