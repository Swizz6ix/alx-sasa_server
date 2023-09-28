const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db_init");

const TrailblazerModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.BLOB("long"),
        allowNull: false
    }
}

const Trailblazer = sequelize.define('trailblazer', TrailblazerModel, {
    timestamps: true,
})

module.exports = { 
    Trailblazer,
    addNew: (post) => {
        return Trailblazer.create(post);
    },

    findAllPost: (query) => {
        return Trailblazer.findAll({
            where: query,
            paranoid: false
        });
    },

    dropPost: (query) => {
        return Trailblazer.destroy({
            where: query,
        });
    },
};