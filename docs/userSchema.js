module.exports = {
    type: 'object',
    properties: {
        id: {

            type: "integer",
            description: "The auto-generated id of the user"
        },
        email: {
            type:" string",
            description: "The email of the user"
        },
        username: {
            type:"string",
            description: "The username of the user"
        },
        avatar: {
            type: "string",
            description: "The profile avatar of the user"
        },
        password: {
            type: "string",
            description: "The password of the user"
        }
    },
    // required: {username, email, password},
    example: {
        id: 1,
        email: "ferdinandcharles@gmail.com",
        username: "swizz6ix",
        avatar:" /images/IMG_20210823_093523_016.jpg",
        password:" 12345"
    }
}
