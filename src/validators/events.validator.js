const Joi = require('joi');

module.exports = {
  paginateEventsValidator: Joi.object().options({ abortEarly: false, stripUnknown: true }).keys({
    page: Joi.number().required(),
    perPage: Joi.number().required(),
  }),
};
