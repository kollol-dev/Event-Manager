const EventModel = require('../models/event')
const paginateEventsValidator = require('../validators/events.validator')

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
    pageinateEvents: async (req, res) => {
        const { page = 1, perPage = 5 } = req.query;

        const validateArgs = paginateEventsValidator.validate({ page, perPage });

        if (validateArgs.error) {
            return res.status(422).json({
                errors: validateArgs.error.details,
            });
        }

        return EventModel.findAll(paginate({}, { page, perPage }))
    }
}