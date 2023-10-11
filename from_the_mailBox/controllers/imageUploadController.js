const fs = require("fs");
const trailblazerModel = require("../../common/models/Trailblazers");
const path = require("path")

module.exports = {
    uploadFiles: async ( req, res ) => {
    try {
        if ( req.file == undefined ) {
            return res.send(`You must select a file. `);
        }

        trailblazerModel.addNew({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                path.join("resources/uploads/" + req.file.filename)
            ),
        })
        .then((post) => {
            console.log("check->", post)
            fs.writeFileSync(
                "resources/tmp/" + post.name, post.data
            );

            return res.send(`File has been uploaded`)
        })
    } catch (error) {
        console.log(error)
        return res.send(`Error when trying to upload image: ${error}`);
    }
},

    getAll: (req, res) => {
        trailblazerModel.findAllPost(req.query)
        .then((quotes) => {
            return res.status(200).json({
                status: true,
                data: quotes,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                error: error,
            });
        });
    },
}
