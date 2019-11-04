const db = require('../../../../library/mongodb');
const libMethod = require('../../../../model/users');
const Joi = require('joi');

const handler = async(req, h) => {
    try {
        const result = await libMethod.deleteOneBook({ productId: parseInt(req.query.productId) })
        if (result.deletedCount === 0) return 'There is no product with given id';
        if (result.deletedCount === 1) {
            return 'product with given id deleted successfully';
        }

    } catch (e) {
        return e.message;
    }
};

const query = {
    productId: Joi.number().positive().integer().required().description('Unique id of product')
};

module.exports = { handler, query };