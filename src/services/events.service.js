const Event = require('../models/event')

const paginate = (query, { page, pageSize }) => {
    const offset = page * pageSize;
    const limit = pageSize;

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
    }
}