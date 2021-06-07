const User = require("../Model/User");

class UserService {
    async readOneUser(id) {
        try {
            const user = await User.query().findById(id);
            return {
                id: user.id,
                name: user.name
            }
        } catch (error) {
            return Promise.reject({
                code: 404,
                message: 'User not found'
            });
        }
    }
}

module.exports = new UserService();