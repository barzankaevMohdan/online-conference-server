module.exports = class UserDto {
    email
    id
    isActivated
    name

    constructor(model) {
        this.email = model.email
        this.id = model.id
        this.isActivated = model.isActivated
        this.name = model.name
    }
}