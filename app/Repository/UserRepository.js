const User = require("../Model/User");

class UserRepository{
    async findById(id) {
        return User.query().findById(id);
    }
}

module.exports = new UserRepository();