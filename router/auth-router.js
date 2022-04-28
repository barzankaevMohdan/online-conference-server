const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max:  32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/recovery', userController.recovery)
router.post('/recovery/:link', userController.recoveryLink)
router.get('/activate/:link', userController.activate)
router.post('/refresh', userController.refresh) // change to get
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router
