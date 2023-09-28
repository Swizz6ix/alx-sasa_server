const uploadFile = require("../common/middleware/ImageUploadMiddleware")
const imageUploadController = require("./controllers/imageUploadController")

const router = require("express").Router();

router.post(
    "/new", uploadFile.single("file"), imageUploadController.uploadFiles
);

router.get("/all", imageUploadController.getAll);


module.exports = router;