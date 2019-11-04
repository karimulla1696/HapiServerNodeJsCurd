const db = require('../../../../library/mongodb');
const libMethod = require('../../../../model/users');
const Joi = require("joi");

const handlerWithoutId = async(req, h) => {
    try {
        const result = await libMethod.findAllBook({});
        if (!result) return 'There is no book in the library';

        return h.response(result);
    } catch (e) {
        return e.message;
    }
};

const query = async(req, h) => {
    try {
        const result = await libMethod.findOneBook({ productId: parseInt(req.query.productId) });
        if (result === null) return h.response({ message: req.i18n.__(404) }); //To print the message in different language

        return result;
    } catch (e) {
        return e.message;
    }
};

const getValidator = {
    productId: Joi.number().positive().integer().required()
};

module.exports = { query, handlerWithoutId, getValidator };