const router = require("express").Router()
const UserControllers = require("../user/controllers/UserController");
const userPayload = require("../user/schema/newUserPayload");
const projectPayload = require("../projects/schema/projectPayload");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");


/**
 *@swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    required:
 *     - username
 *     - email
 *     - password
 *    properties:
 *     id:
 *      type: number,
 *      description: The auto-generated id of the user
 *     email:
 *      type: string
 *      description: The email of the user
 *     username:
 *      type: string
 *      description: The username of the user
 *     avatar:
 *      type: string
 *      description: The profile avatar of the user
 *     password:
 *      type: string
 *      description: The password of the user
 *    example:
 *     email: ferdinandcharles@gmail.com
 *     username: swizz6ix
 *     avatar: /images/IMG_20210823_093523_016.jpg
 *     password: "12345"
 */

/**
 *@swagger
 * tags:
 *  name: Users
 *  description: The user managing API
 * /user/new:
 *  post:
 *   summary: Create a new user
 *   tags: [Users]
 *   requestBody:
 *    required: true
 *    content: 
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: The created User
 *     content: 
 *      application/json:
 *       schema:
 *        $ref: "#/components/schemas/User"
 *    500:
 *     description: Some server error
 * 
 * /user/all:
 *  get:
 *   summary: Array of all Users
 *   tags: [Users]
 *   responses:
 *    200:
 *     description: An array of all Users
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schema/Users'
 * 
 * /user/delete/{id}:
 *  delete:
 *   summary: Delete users by id
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The user's id to be deleted
 *   responses:
 *    200:
 *     description: The user was deleted
 *    404:
 *     description: The user was not found
 */


router.post(
    "/new",
    [SchemaValidator.verify(userPayload)],
    UserControllers.addUser
);
router.get("/all", UserControllers.getAllUsers);
router.get("/:userId", UserControllers.getUser);
router.delete('/delete/:userId', UserControllers.dropUser);

module.exports = router;