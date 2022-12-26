const EventModel = require('../models/event')
const { paginateEventsValidator } = require('../validators/events.validator')

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
        const { page = 1, pageSize = 5 } = req.query;

        const validateArgs = paginateEventsValidator.validate({ page, pageSize });
        if (validateArgs.error) {
            return res.status(422).json({
                errors: validateArgs.error.details,
            });
        }

        const events = EventModel.findAll(paginate({}, { page, pageSize }))
        return res.status(200).json({
            page,
            perPage,
            data: events,
        });
    }
}