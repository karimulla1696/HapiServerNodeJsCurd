const Joi = require('joi');

const errorValidator = (req, h, error) => {
    return error.isJoi ? h.response(error.details[0].message).takeover() : h.response(error).takeover();
};

module.exports = errorValidator;