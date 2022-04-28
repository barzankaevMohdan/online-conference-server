const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const UserTokenDto = require('../dtos/user-token-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password, name) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.BadRequest(`Возникли ошибки: Login уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await User.create({email, password: hashPassword, activationLink, name})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`)

        const userDto = new UserDto(user) // id, email, isActivated, name
        const userTokenDto = new UserTokenDto(user) // id, email, isActivated
        const tokens = tokenService.generateToken({...userTokenDto})
        await tokenService.saveToken(userTokenDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto,
        }
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink}})
        if (!user) {
            throw ApiError.BadRequest
            ('Некорретная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            throw ApiError.BadRequest('user not found')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user)
        const userTokenDto = new UserTokenDto(user)
        const tokens = tokenService.generateToken({...userTokenDto})
        await tokenService.saveToken(userTokenDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto,
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async forgot(email) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            throw ApiError.BadRequest
            ('Пользователь не найден')
        }
        await mailService.sendForgotMail(email, `${process.env.CLIENT_URL}/${user.activationLink}`)
    }

    async recovery(activationLink, password) {
        const user = await User.findOne({where: {activationLink}})
        if (!user) {
            throw ApiError.BadRequest
            ('Пользователь не найден')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        user.password = hashPassword
        await user.save()

        const userDto = new UserDto(user) // id, email, isActivated, name
        const userTokenDto = new UserTokenDto(user) // id, email, isActivated
        const tokens = tokenService.generateToken({...userTokenDto})
        await tokenService.saveToken(userTokenDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto,
        }
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await User.findOne({where: {id: userData.id}})
        const userDto = new UserDto(user)
        const userTokenDto = new UserTokenDto(user)
        const tokens = tokenService.generateToken({...userTokenDto})
        await tokenService.saveToken(userTokenDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto,
        }
    }

    async getAllUsers() {
        const users = await User.find()
        return users
    }
}

module.exports = new UserService()