const router = require("express").Router();
const _ProjectControllers = require("../_projects/controllers/_projectController");
const _projectPayload = require("../_projects/schemas/_projectSchema");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");

/**
 *@swagger
 * components:
 *  schemas:
 *   SecondChance_Projects:
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
 *     progress: 50.0% done
 *     projectCode: 361
 *     projectName: Research & Project approval (part2)
 *     startedOn: Sep 25, 2023 6:00 AM
 *     deadline: Sep 29, 2023 6:00 AM
 */


/**
 *@swagger
 * tags:
 *  name: SecondChance_Projects
 *  description: The projects managing API
 * /second_chance/new:
 *  post:
 *   summary: Create a new project
 *   tags: [SecondChance_Projects]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/SecondChance_Projects'
 *   responses:
 *    200:
 *     description: The created Project
 *     content:
 *      application/json:
 *       schema:
 *        $ref: "#/components/schemas/SecondChance_Projects"
 *    500:
 *     description: Some server error
 * 
 * /second_chance/all:
 *  get:
 *   summary: Array of all projects
 *   tags: [SecondChance_Projects]
 *   responses:
 *    200:
 *     description: An array of all projects
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schema/SecondChance_Projects'
 */


router.post(
    "/new",
    // [SchemaValidator.verify(_projectPayload)],
    _ProjectControllers.addProject
);
router.get("/all", _ProjectControllers.getAllProjects);

module.exports = router;
