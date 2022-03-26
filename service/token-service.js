const jwt = require('jsonwebtoken')
const {Token} = require('../models/models')

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET ?? 'jwt-secret-key-mohdan'
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? 'jwt-refresh-secret-key-mohdan'

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(
            payload,
            JWT_ACCESS_SECRET,
            {expiresIn: '30m'}
        )
        const refreshToken = jwt.sign(
            payload,
            JWT_REFRESH_SECRET,
            {expiresIn: '30d'}
        )
        return {
            accessToken,
            refreshToken,
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {userId}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await Token.create({refreshToken, userId})
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({where: {refreshToken}})
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}})
        return tokenData
    }
}

module.exports = new TokenService()