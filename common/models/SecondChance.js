const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db_init");

const SecondChanceModels = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    progress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startedOn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deadline: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

const _Project = sequelize.define("second_chance", SecondChanceModels, {
    timestamps: false
});

module.exports = {
    _Project,

    newProject: (query, project) => {
        return _Project.findOrCreate({
            where: query,
            defaults: project
        });
    },

    findProject: (query) => {
        return _Project.findOne({
            where: query
        })
    },

    findAllProjects: (query) => {
        return _Project.findAll({
            where: query
        });
    },

    deleteProject:(query) => {
        return _Project.destroy({
            where: query,
            force: true,
        });
    }
};
