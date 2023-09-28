const { DataTypes } = require('sequelize');
const { sequelize } = require("../../db_init");

const MemeModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.BLOB("long"),
        allowNull: false
    }
}

const Meme = sequelize.define("meme", MemeModel, {
    timestamps: true
})

module.exports = {
    Meme,

    addMemes: (post) => {
        return Meme.create(post);
    },

    findMeme: (query) => {
        return Meme.findOne({
            where: query,
        });
    },

    findAllMemes: (query) => {
        return Meme.findAll({
            where: query,
            paranoid: false
        });
    },

    updatePost: (query, updateValue) => {
        return Meme.update(updateValue, {
            where: query,
        });
    },

    dropPost: (query) => {
        return Meme.destroy({
            where: query
        });
    }
}