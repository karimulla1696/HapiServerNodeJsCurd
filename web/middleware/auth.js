// const validator = require('./authValidation');
require('dotenv').config();

const jwtKey = process.env.SECRET_KEY;

const validateJwt = async(decoded, req, h) => ({ isValid: true });

// jwt2 auth strategy
exports.register = async(server) => {
    await server.register(require('hapi-auth-jwt2'));

    // define jwt2 auth strategy

    server.auth.strategy('jwt2', 'jwt', {
        key: jwtKey,
        validate: validateJwt,
        verifyOptions: { algorithms: ['HS256'] },
    });

};

exports.pkg = {
    name: 'auth',
};