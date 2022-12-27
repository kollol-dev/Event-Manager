const { Event } = require('../models')

const paginate = (query, { page, pageSize }) => {
    const offset = parseInt(--page * pageSize);
    const limit = parseInt(pageSize);
    return {
        ...query,
        offset,
        limit,
    };
};
module.exports = {
    paginateEvent: async (page, pageSize) => {
        return Event.findAll(paginate({}, { page, pageSize }))
    },

    getEvent: async (id) => {
        return Event.findByPk(id)
    },

    createEvent: async (args) => {
        return Event.create(args)
    },

    updateEvent: async ({ id, ...args }) => {
        return Event.update(args, { where: { id } })
    },

    deleteEventById: async (id) => {
        return Event.destroy({
            where: { id }
        })
    },

    deleteAllEvents: async () => {
        return Event.destroy({
            where: {},
            truncate: true
        })
    }
}