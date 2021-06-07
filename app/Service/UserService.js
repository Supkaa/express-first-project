const UserRepository = require("../Repository/UserRepository");

class UserService {
    async readOneUser(id) {
        try {
            const user = await UserRepository.findById(id);
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