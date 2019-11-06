const putHandler = require('./put');
const server = require('../../../../index');
const error = require('../../../middleware/validator');
// const auth = require('../../../middleware/auth');

module.exports = {
    method: 'PUT',
    path: '/products',
    options: {
        description: 'To update the particular product ',
        notes: 'retrun an object',
        tags: ['api', 'user'],
        auth: 'jwt2',

        validate: {
            payload: putHandler.updateValidator,
            failAction: error.errorValidator
        },
        handler: putHandler.payload

    }
};