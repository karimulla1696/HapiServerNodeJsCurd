const getHandler = require('./get');
const server = require('../../../../index');
const error = require('../../../middleware/validator');
// const jwt = require('jsonwebtoken');

module.exports = [{
    method: 'GET',
    path: '/products',
    options: {
        description: 'Get products list',
        notes: 'Returns an array of products',
        auth: 'jwt2',
        tags: ['api', 'user'],
        handler: getHandler.handlerWithoutId
    }
},
    {
        method: 'GET',
        path: '/products/productId',
        options: {
            description: 'Get the one product of given id',
            notes: 'Returns a product',
            tags: ['api', 'user'],
            auth: 'jwt2',
            handler: getHandler.query,
            validate: {
                query: getHandler.getValidator,
                failAction: error.errorValidator
            }
        }
    }
];