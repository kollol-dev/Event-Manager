const { paginateEventsValidator, createEventValidator, updateEventValidator } = require('../validators/events.validator')
const { paginateEvent, getEvent, createEvent, updateEvent, deleteEventById } = require('../services/events.service')

module.exports = {
    pageinateEvents: async (req, res) => {
        try {
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
                pageSize,
                data: events,
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Something went wrong!',
            });
        }

    },

    getEventByid: async (req, res) => {
        try {
            const event = await getEvent(req.params.id)
            return res.status(200).json({
                data: event,
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Something went wrong!',
            });
        }
    },

    createEvent: async (req, res) => {
        try {
            const args = req.body
            const validateArgs = createEventValidator.validate(args);
            if (validateArgs.error) {
                return res.status(422).json({
                    errors: validateArgs.error.details,
                });
            }

            const event = await createEvent(args)
            return res.status(201).json({
                data: event,
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Something went wrong!',
            });
        }
    },

    updateEventById: async (req, res) => {
        try {
            const args = req.body
            const validateArgs = updateEventValidator.validate(args);
            if (validateArgs.error) {
                return res.status(422).json({
                    errors: validateArgs.error.details,
                });
            }

            args.id = req.params.id
            await updateEvent(args)

            return res.status(200).json({
                event: await getEvent(args.id)
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Something went wrong!',
            });
        }
    },

    deleteEventById: async (req, res) => {
        try {
            const event = await deleteEventById(req.params.id)
            return res.status(200).json({
                success: event ? true : false,
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: 'Something went wrong!',
            });
        }
    }
}