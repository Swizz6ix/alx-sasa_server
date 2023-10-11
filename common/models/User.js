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
    password: {
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
        }
        )
    },

    findAllUsers: (query) => {
        return User.findAll({
            where: query, 
        });
    },

    upDateUser: (query, updateValue) => {
        return User.update(updateValue, {
            where: query,
        });
    },

    dropUser: (query) => {
        return User.destroy({
            where: query,
            force: TextTrackCue
        });
    },
}