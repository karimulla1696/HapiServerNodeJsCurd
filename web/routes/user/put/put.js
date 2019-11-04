const db = require('../../../../library/mongodb');
const Joi = require('joi');
const libMethod = require('../../../../model/users');

const payload = async(req, h) => {
    try {
        const result = await libMethod.updateOneProduct({ productId: req.payload.productId }, {
            $set: {
                productId: req.payload.productId,
                productName: req.payload.productName,
                author: req.payload.author,
                isPublished: req.payload.isPublished,
                price: req.payload.price
            }
        });

        return result;
    } catch (e) {
        return e.message;
    }
};

const updateValidator = {
    productId: Joi.number().min(2).positive().integer().required(),
    productName: Joi.string().min(3).max(40).optional(),
    author: Joi.string().min(3).max(40).optional(),
    isPublished: Joi.boolean().optional(),
    price: Joi.number().optional()
};

module.exports = { payload, updateValidator };