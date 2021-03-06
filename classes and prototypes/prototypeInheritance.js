function User(username, email) {
    this.username = username
    this.email = email
    this.score = 0
}
User.prototype.login = function () {
    console.log(`${this.username} just logged in!`)
    return this
}
User.prototype.logout = function () {
    console.log(`${this.username} just logged out!`)
    return this
}


function Admin(username, email, role) {
    User.call(this, username, email)
    this.role = role
}

//inhereting User's prototype to access those methods.
Admin.prototype = Object.create(User.prototype)
Admin.prototype.manage = function () { }

const userOne = new User('talpade', 'talpade.com')
const userTwo = new User('ram bahadur', 'ram@bahadur')
const admin = new Admin('arpit', 'arpted7@gmail.com', 'hero')
admin.login().logout()
console.log(admin)