const Joi = require('joi');

module.exports = {
    paginateEventsValidator: Joi.object().options({ abortEarly: false, stripUnknown: true }).keys({
        page: Joi.number().required(),
        pageSize: Joi.number().required(),
    }),

    createEventValidator: Joi.object().options({ abortEarly: false, stripUnknown: true }).keys({
        name: Joi.string().required(),
        location: Joi.string().required(),
        date: Joi.date().iso()
    }),

    updateEventValidator: Joi.object().options({ abortEarly: false, stripUnknown: true }).keys({
        name: Joi.string(),
        location: Joi.string()
    })
};
