const EventModel = require('../models/event')
const { paginateEventsValidator } = require('../validators/events.validator')
const { paginateEvent } = require('../services/events.service')

module.exports = {
    pageinateEvents: async (req, res) => {
        const { page = 1, pageSize = 5 } = req.query;

        const validateArgs = paginateEventsValidator.validate({ page, pageSize });
        if (validateArgs.error) {
            return res.status(422).json({
                errors: validateArgs.error.details,
            });
        }

        const events = await paginateEvent(page, pageSize)
        return res.status(200).json({
            page,
            perPage,
            data: events,
        });
    },

    createEvent: async (req, res) => {
        const validateArgs = paginateEventsValidator.validate(req.body);
        if (validateArgs.error) {
            return res.status(422).json({
                errors: validateArgs.error.details,
            });
        }
    }
}