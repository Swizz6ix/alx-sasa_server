const multer = require("multer");

const __basedir = "alx-sasa_server/"

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "resources/uploads");
    },
    fileName: (req, file, cb) => {
        cb(null, `${Date.now()}-sasa-${file.originalname}`);
    }
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter});
module.exports = uploadFile