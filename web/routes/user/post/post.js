const db = require('../../../../library/mongodb');
const Joi = require('joi');
const libMethod = require('../../../../model/users');

const payload = async(req, h) => {
    try {
        const result = await libMethod.postOneBook({
            productId: req.payload.productId,
            productName: req.payload.productName,
            author: req.payload.author,
            isPublished: req.payload.isPublished,
            price: req.payload.price
        });
        if (result.insertedCount === 1) {
            return 'product inserted successfully';
        }
        // return result;
    } catch (e) {
        return e.message;
    }
};


const postValidator = {
    productId: Joi.number().min(2).positive().integer().required(),
    productName: Joi.string().min(3).max(20).required(),
    author: Joi.string().min(3).max(20).required(),
    isPublished: Joi.boolean().required(),
    price: Joi.number().required()
};

module.exports = { payload, postValidator };