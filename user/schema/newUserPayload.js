const projectPayload = require("../../projects/schema/projectPayload")

module.exports = {
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
        "email",
        "password"
    ],
}