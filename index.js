require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')
const session = require('express-session')

const PORT = process.env.PORT || 5000
const app = express()
app.use(session({
    secureProxy: true,
    secret: 'secretMohdan1234',
    cookie: {
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
    }
}))
app.set('trust proxy', 1)
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
