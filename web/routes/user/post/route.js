const server = require('../../../../index');
const postHandler = require('./post');
const error = require('../../../middleware/validator');

module.exports = {
    method: 'POST',
    path: '/products',
    options: {
        description: 'post the product to the database',
        notes: 'return an object ',
        tags: ['api', 'user'],

        handler: postHandler.payload,
        validate: {
            payload: postHandler.postValidator,
            failAction: error.errorValidator
        }
    }
};