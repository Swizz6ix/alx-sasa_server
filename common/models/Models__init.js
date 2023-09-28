module.exports = {
    initialize: (sequelize, tableName, model, mod) => {
        mod = sequelize.define(tableName, model);
    },

    addNew: (fresh) => {
        return this.model.create(fresh);
    },

    findItem: (query) => {
        return this.model.findOne({
        where: query,
        });
    },

    findAllItems: async (query, mod) => {
        await mod.findAll({
        where: query,
        paranoid: false,
        });
    },

    updateItems: (query, updateValue) => {
        return this.model.update(updateValue, {
        where: query,
        });
    },

    dropItem: (query) => {
        return this.model.destroy({
        where: query,
        });
    },
};
