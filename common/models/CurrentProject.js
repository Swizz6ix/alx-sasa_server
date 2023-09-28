const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db_init");


const CurrentProjectModels = {
    id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
    progress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    projectCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startedOn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deadline: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const Project = sequelize.define("current_project", CurrentProjectModels, { timestamps: false})

module.exports = {
    Project,

    newProject: (query, project) => {
        return Project.findOrCreate({
            where: query,
            defaults: project
        })
    },

    findAllProjects: (query) => {
        return Project.findAll({
            where: query
        });
    },

    deleteProject:(query) => {
        return Project.destroy({
            where: query,
            force: true
        });
    }
};