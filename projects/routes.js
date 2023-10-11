const router = require("express").Router();
const ProjectControllers = require("../projects/controllers/ProjectController");
const projectPayload = require("../projects/schema/projectPayload");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");

/**
 *@swagger
 * components:
 *  schemas:
 *   Projects:
 *    type: object
 *    required:
 *     - progress
 *     - projectCode
 *     - projectName
 *     - startedOn
 *     - deadline
 *    properties:
 *     id:
 *      type: number,
 *      description: The auto-generated id of the project
 *     progress:
 *      type: string
 *      description: The score of the leaner in percentage
 *     projectCode:
 *      type: string
 *      description: The unique code of the project in progress
 *     projectName:
 *      type: string
 *      description: The name of the project in progress
 *     startOn:
 *      type: string
 *      description: The time and date the project started
 *     deadline:
 *      type: string
 *      description: The deadline of the project
 *    example:
 *     progress: 100.0% done
 *     projectCode: 564
 *     projectName: Build your portfolio project (week2)
 *     startedOn: Aug 25, 2023 6:00 AM
 *     deadline: Sep 24, 2023 6:00 AM
 */

/**
 *@swagger
 * tags:
 *  name: Projects
 *  description: The projects managing API
 * /project/new:
 *  post:
 *   summary: Create a new project
 *   tags: [Projects]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Projects'
 *   responses:
 *    200:
 *     description: The created Project
 *     content:
 *      application/json:
 *       schema:
 *        $ref: "#/components/schemas/Projects"
 *    500:
 *     description: Some server error
 * 
 * /project/all:
 *  get:
 *   summary: Array of all projects
 *   tags: [Projects]
 *   responses:
 *    200:
 *     description: An array of all projects
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schema/Projects'
 */


router.post(
    "/new",
    // [SchemaValidator.verify(projectPayload)],
    ProjectControllers.addProject
);
router.get("/all", ProjectControllers.getAllProjects);

module.exports = router;