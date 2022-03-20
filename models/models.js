const User = require('./user-model')
const Token = require('./token-model')
const Stream = require('./stream-model')
const Speech = require('./speech-model')
const Speaker = require('./speaker-model')
const Message = require('./Chat/message-model')
const ChatRoom = require('./Chat/chat-rooms-model')

User.hasOne(Token)
Token.belongsTo(User)

Stream.hasMany(Speech)
Speech.belongsTo(Stream)

Speech.hasMany(Speaker)
Speaker.belongsTo(Speech)

ChatRoom.hasMany(Message)
Message.belongsTo(ChatRoom)

module.exports = {
    User,
    Token,
    Stream,
    Speech,
    Speaker,
    Message,
    ChatRoom
}