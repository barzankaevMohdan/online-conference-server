require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')
const session = require('express-session')

const PORT = process.env.PORT || 5000
const allowedDomains = [process.env.CLIENT_URL, process.env.CLIENT_URL_LOCAL];
const app = express()
app.use(session({
    secureProxy: true,
    secret: process.env.JWT_ACCESS_SECRET,
    cookie: {
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
        domain: process.env.CLIENT_URL,
        path: '/'
    }
}))
app.set('trust proxy', 1)
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        
        if (!allowedDomains.includes(origin)) {
            var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (e) {
        console.log('error', e)
    }
}

start()
