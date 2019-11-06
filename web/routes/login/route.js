const error = require('../../middleware');
const loginHandler = require('./post');


module.exports = {
    method: 'POST',
    path: '/login',
    options: {
        description: 'Login with valid credentials',
        notes: 'return an object ',
        tags: ['api', 'login'],

        validate: {
            payload: loginHandler.payload,
            failAction: error.errorValidator
        },
        handler: loginHandler.handler
    },
};