const error = require('../../middleware');
const signupHandler = require('./signup');


module.exports = {
    method: 'POST',
    path: '/signup',
    options: {
        validate: {
            payload: signupHandler.signupValidator,
            failAction: error.errorValidator
        },
        handler: signupHandler.handler
    },
};