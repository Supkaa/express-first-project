const UserService = require("../Service/UserService");

class UserController {
    async getOneUser(request, response) {
        const { id } = request.params;
        if (!Number(id)) {
            return response.status(400).json('Bad request params - id not number');
        }
        try {
            const user = await UserService.readOneUser(id);
            response.status(200).json(user);
        } catch (error) {
            console.error(error);
            response.status(error.code).json(error.message);
        }
    }
}
module.exports = new UserController();

