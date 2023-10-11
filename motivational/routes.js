const router = require("express").Router();
const MotivationalControllers = require("../motivational/controllers/MotivationControllers");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");
const quotePayload = require("../motivational/schema/quotesPayload");

/**
 *@swagger
 * components:
 *  schemas:
 *   Motivational:
 *    type: object
 *    required:
 *     - quote
 *    properties:
 *     id:
 *      type: integer,
 *      description: The auto-generated id of the user
 *     quote:
 *      type: string
 *      description: The motivational quote
 *    example:
 *     quote: When everything seems to be going against you, remember airplane takes off against the wind not with it.
 * 
 */

/**
 *@swagger
 * tags:
 *  name: Motivational
 *  description: The Motivational quote managing API
 * /motivation/add:
 *  post:
 *   summary: Create a motivational quote
 *   tags: [Motivational]
 *   requestBody:
 *    required: true
 *    content: 
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Motivational'
 *   responses:
 *    200:
 *     description: The creation of a motivational quote
 *     content: 
 *      application/json:
 *       schema:
 *        $ref: "#/components/schemas/Motivational"
 *    500:
 *     description: Some server error
 * 
 * /motivation/{id}:
 *  get:
 *   summary: retrieve motivational quote by id
 *   tags: [Motivational]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: number
 *      required: true
 *      description: The motivational quote id
 *   response:
 *    200:
 *     description: The motivational quote response by id
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schema/Motivational'
 *    400:
 *     description: The quote was not found
 * 
 * /motivation/edit/{id}:
 *  patch:
 *   summary: Update the motivational quote by the id
 *   tags: [Motivational]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: number
 *      required: true
 *      description: The motivational quote id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Motivational'
 *   responses:
 *    200:
 *     description: The updated motivational quote
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Motivational'
 *    404:
 *     description: The motivational quote was not found
 *    500:
 *     description: Some error happened
 * 
 * /motivation/all:
 *  get:
 *   summary: Array of all motivational quotes
 *   tags: [Motivational]
 *   responses:
 *    200:
 *     description: An array of all motivational quotes
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schema/motivation'
 * 
 * /motivation/delete/{id}:
 *  delete:
 *   summary: Delete motivational quotes by id
 *   tags: [Motivational]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: The motivational quote id to be deleted
 *   responses:
 *    200:
 *     description: The motivational quote was deleted
 *    404:
 *     description: The motivational quote was not found
 */


router.post(
    "/add",
    [SchemaValidator.verify(quotePayload)],
    MotivationalControllers.addQuote
);
router.get("/all", MotivationalControllers.getAllQuotes);
router.get("/:quoteId", MotivationalControllers.getQuote);
router.patch(
    "/edit/:quoteId",
    [SchemaValidator.verify(quotePayload)],
    MotivationalControllers.updateQuote
);
router.delete("/delete/:quoteId", MotivationalControllers.deleteQuote);

module.exports = router;