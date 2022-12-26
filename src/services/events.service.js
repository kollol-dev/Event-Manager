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

    createEvent: async (args) => {
        return Event.create(args)
    }
}