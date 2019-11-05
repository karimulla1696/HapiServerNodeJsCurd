const error = require('../../middleware');
const signupHandler = require('./signup');


module.exports = {
    method: 'POST',
    path: '/signUp',
    options: {
        description: 'Login details in the database',
        notes: 'return an object ',
        tags: ['api', 'signUp'],

        validate: {
            payload: signupHandler.signupValidator,
            failAction: error.errorValidator
        },
        handler: signupHandler.handler
    },
};