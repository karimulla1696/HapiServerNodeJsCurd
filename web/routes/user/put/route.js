const putHandler = require('./put');
const server = require('../../../../index');
const error = require('../../../middleware/validator');

module.exports = {
    method: 'PUT',
    path: '/products',
    options: {
        description: 'To update the particular product ',
        notes: 'retrun an object',
        tags: ['api', 'user'],
        validate: {
            payload: putHandler.updateValidator,
            failAction: error.errorValidator
        },
        handler: putHandler.payload

    }
};