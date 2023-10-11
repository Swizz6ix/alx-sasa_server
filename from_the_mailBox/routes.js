const uploadFile = require("../common/middleware/ImageUploadMiddleware")
const imageUploadController = require("./controllers/imageUploadController")

const router = require("express").Router();

/**
 *@swagger
 * components:
 *  schemas:
 *   Trailblazers:
 *    type: object
 *    required:
 *     - type
 *     - name
 *     - data
 *    properties:
 *     id:
 *      type: number,
 *      description: The auto-generated id of the trailblazer post
 *     type:
 *      type: string
 *      description: The type of media being upload (jpeg/png/gif)
 *     name:
 *      type: string
 *      description: The name of the media file being upload
 *     data:
 *      type: blob(long)
 *      description: The media buffer of the media file being upload
 *    example:
 *     type: image/png
 *     name: trailblazer(8/10/23).png
 *     data: [225, 216, 255, 225, 0, 52, 69, 120, 105]
 */


/**
 *@swagger
 * tags:
 *  name: Trailblazers
 *  description: The trailblazers managing API
 * /trailblazer/new:
 *  post:
 *   summary: Create a new project
 *   tags: [Trailblazers]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Trailblazers'
 *   responses:
 *    200:
 *     description: The created Project
 *     content:
 *      application/json:
 *       schema:
 *        $ref: "#/components/schemas/Trailblazers"
 *    500:
 *     description: Some server error
 * 
 * /trailblazer/all:
 *  get:
 *   summary: Array of all trailblazer posts
 *   tags: [Trailblazers]
 *   responses:
 *    200:
 *     description: An array of all trailblazer
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schema/trailblazer'
 */


router.post(
    "/new", uploadFile.single("file"), imageUploadController.uploadFiles
);

router.get("/all", imageUploadController.getAll);


module.exports = router;