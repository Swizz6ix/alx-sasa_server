const uploadFile = require('../common/middleware/ImageUploadMiddleware');
const memeController = require("./controllers/memeController")
const router = require("express").Router();

router.post(
    "/new", uploadFile.single("file"), memeController.uploadFiles
);

router.get("/all", memeController.getAll)

module.exports = router;