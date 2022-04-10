const User = require('./user-model')
const Token = require('./token-model')
const Stream = require('./stream-model')
const Speech = require('./speech-model')
const Speaker = require('./speaker-model')
const Message = require('./message-model')
const Player = require('./player-model')

User.hasOne(Token)
Token.belongsTo(User)

Stream.hasMany(Speech)
Speech.belongsTo(Stream)

Stream.hasMany(Message)
Message.belongsTo(Stream)

Stream.hasMany(Player)
Player.belongsTo(Stream)

Speech.hasMany(Speaker)
Speaker.belongsTo(Speech)

module.exports = {
    User,
    Token,
    Stream,
    Speech,
    Speaker,
    Message,
    Player,
}