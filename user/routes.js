const router = require("express").Router()
const UserControllers = require("../user/controllers/UserController");
const userPayload = require("../user/schema/newUserPayload");
const projectPayload = require("../projects/schema/projectPayload");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");


router.post(
    "/new",
    [SchemaValidator.verify(userPayload)],
    UserControllers.addUser
);
router.get("/all", UserControllers.getAllUsers);
router.get("/:userId", UserControllers.getUser);

module.exports = router;