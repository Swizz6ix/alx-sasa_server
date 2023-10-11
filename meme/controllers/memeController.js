const fs = require("fs");
const memeModel = require('../../common/models/Meme');
const path = require('path');

module.exports = {
    uploadFiles: async ( req, res ) => {
        try {
            if ( req.file === undefined ) {
                return res.send(`You must select a file.`);
            };

            memeModel
            .addMemes({
                type: req.file.mimetype,
                name: req.file.originalname,
                data: fs.readFileSync(
                    path.join("resources/uploads/" + req.file.filename)
                ),
                caption: req.body.caption
            })
            .then((post) => {
                console.log("check ->", post)
                fs.writeFileSync(
                    "resources/tmp/" + post.name, post.data
                );

                return res.send(`Posted successfully`)
            })
        }
        catch (error) {
            console.log(error)
            return res.send(`Error when trying to upload image: ${error}`);
        }
    },

    getAll: (req, res) => {
        memeModel
        .findAllMemes(req.query)
        .then((posts) => {
            return res.status(200).json({
                status: true,
                data: posts,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                error: error
            })
        })
    },

    updatePost: (req, res) => {
        const {
            params: { postId },
            body: payload,
        } = req;

        // If the payload does not have any keys,
        // then return an error, as nothing can be updated
        if (!Object.keys(payload).length) {
            return res.status(400).json({
                status: false,
                error: {
                    message: "Body is empty, hence cant't update the quote"
                },
            });
        }
        memeModel
        .updatePost({ id: postId }, payload)
        .then(() => {
            return memeModel.findMeme({ id: quoteId });
        })
        .then((post) => {
            return res.status(200).json({
                status: true,
                data: post.toJSON(),
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                error: error,
            });
        });
    },

    deletePost: ( req, res ) => {
        const {
            params: { postId },
        } = req;

        memeModel
        .dropPost({ id: postId})
        .then((numberOfEntriesDeleted) => {
            return res.status(200).json({
                status: true,
                data: {
                numberOfEntriesDeleted: numberOfEntriesDeleted,
                },
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                error: error
            });
        });
    }
};