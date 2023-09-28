const router = require("express").Router();
const _ProjectControllers = require("../_projects/controllers/_projectController");
const _projectPayload = require("../_projects/schemas/_projectSchema");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");

router.post(
    "/new",
    // [SchemaValidator.verify(_projectPayload)],
    _ProjectControllers.addProject
);
router.get("/all", _ProjectControllers.getAllProjects);

module.exports = router;
