const router = require("express").Router();
const ProjectControllers = require("../projects/controllers/ProjectController");
const projectPayload = require("../projects/schema/projectPayload");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");


router.post(
    "/new",
    // [SchemaValidator.verify(projectPayload)],
    ProjectControllers.addProject
);
router.get("/all", ProjectControllers.getAllProjects);

module.exports = router;