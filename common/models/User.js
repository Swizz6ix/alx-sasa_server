const { DataTypes } = require('sequelize')
const { sequelize } = require("../../db_init");
const { Project } = require("./CurrentProject");
const { _Project } = require('./SecondChance');


// The schema that defines the property of a user
const userModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },

    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}

const User = sequelize.define("user", userModel, {timestamps: false})

// const Cohort = sequelize.define("cohort", { cohort: DataTypes.INTEGER }, { timestamps: false })

// User.belongsToMany(Cohort, {
//     through: "current_project",
//     onDelete: "cascade",
//     sourceKey: 'id',
//     targetKey: "id"
//     // foreignKey: "userId"
// })

// Cohort.belongsToMany(User, {
//     through: 'current_project',
//     onDelete: "cascade",
//     targetKey: 'id',
//     sourceKey: "id"
//     // foreignKey: "userId"
// })

// User._Project = User.hasMany(_Project, {
//     onDelete: "cascade",
//     sourceKey: 'id',
//     foreignKey: "userId"
// })

// _Project.User = _Project.belongsTo(User, {
//     onDelete: "cascade",
//     targetKey: 'id',
//     foreignKey: "userId"
// })



module.exports = {
    createUser: (query, user) => {
        return User.findOrCreate({
            where: query,
            defaults: user
        })
    },

    findUser: (query) => {
        return User.findOne({
            where: query,
            // include: {
            //     model: Project,
            //     // include: [ _Project.User ]
            // },
            // include: [ _Project.User]
        }
        )
    },

    findAllUsers: (query) => {
        return User.findAll({
            where: query, 
            // include: {
            //     // model: Project,
            //     // include: [User._Project ]
            // }
        });
    }
}