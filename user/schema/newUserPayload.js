const projectPayload = require("../../projects/schema/projectPayload")

module.exports = {
    // "$id": "https://swizz6ix.com/schemas/user.json",
    type: 'object',
    properties: {
        username: {
            type: "string"
        },
        avatar: {
            type: "string"
        },
        email: {
            type: 'string',
            pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
        },
        password: {
            type: 'string',
        }
    },
    required: [
        "username",
        "avatar",
        "password"
    ],
}