const { DataTypes } = require('sequelize');
const { sequelize } = require("../../db_init");


const MotivationModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    quote: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}

const Motivational = sequelize.define("motivation", MotivationModel, {timestamps: true})

module.exports = {
    MotivationModel,

    addNew: (quote) => {
        return Motivational.create(quote);
    },

    findQuote: (query) => {
        return Motivational.findOne({
        where: query,
        });
    },

    findAllQuotes: (query) => {
        return Motivational.findAll({
        where: query,
        paranoid: false,
        });
    },

    updateQuote: (query, updateValue) => {
        return Motivational.update(updateValue, {
        where: query,
        });
    },

    dropQuote: (query) => {
        return Motivational.destroy({
        where: query,
        force: TextTrackCue
        });
    },
};
