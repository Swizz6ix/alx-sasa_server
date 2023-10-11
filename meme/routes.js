const uploadFile = require('../common/middleware/ImageUploadMiddleware');
const memeController = require("./controllers/memeController")
const router = require("express").Router();

/**
 *@swagger
 * components:
 *  schemas:
 *   Memes:
 *    type: object
 *    required:
 *     - type
 *     - name
 *     - data
 *    properties:
 *     id:
 *      type: number,
 *      description: The auto-generated id of the meme
 *     type:
 *      type: string
 *      description: The type of media being upload (jpeg/png/gif)
 *     name:
 *      type: string
 *      description: The name of the media file being upload
 *     data:
 *      type: blob(long)
 *      description: The media buffer of the media file being upload
 *     caption:
 *      type: string
 *      description: The caption of the meme being upload
 *    example:
 *     type: image/png
 *     name: crash.png
 *     data: [225, 216, 255, 225, 0, 52, 69, 120, 105]
 *     caption: Frontend engineers wont't can't relate
 */

/**
 *@swagger
 * tags:
 *  name: Memes
 *  description: The memes managing API
 * /memes/new:
 *  post:
 *   summary: Create a new meme
 *   tags: [Memes]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Memes'
 *   responses:
 *    200:
 *     description: The created meme
 *     content:
 *      application/json:
 *       schema:
 *        $ref: "#/components/schemas/Memes"
 *    500:
 *     description: Some server error
 * /memes/all:
 *  get:
 *   summary: Array of all memes
 *   tags: [Memes]
 *   responses:
 *    200:
 *     description: An array of all memes
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schema/Memes'
 */


router.post(
    "/new", uploadFile.single("file"), memeController.uploadFiles
);

router.get("/all", memeController.getAll)

module.exports = router;