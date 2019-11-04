const Hapi = require('hapi');
require('dotenv').config();
const db = require('../library/mongodb');
const middleware = require('./middleware');
const logger = require('../web/commonModel/logger');
const Inert = require('inert');
const Vision = require('vision');


const i18n = require('hapi-i18n');

const server = new Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,

});

exports.init = async() => {
    //register plugins to server instance
    await server.register([
        Inert,
        Vision,
        {
            plugin: require('hapi-swagger'),
            options: middleware.swaggerOptions
        },
        {
            plugin: require('good'),
            options: middleware.goodOptions
        },
        middleware.localization.i18n
    ]);
    await server.route(require('./routes'));
    await server.initialize();
    return server;
};

exports.start = async() => {
    try {
        await db.getConn();
        await server.start();
        logger.info(`server is running at ${server.info.uri}`);
        //  console.log(server.table()); -> used to get all routes
    } catch (e) {
        logger.error(e.message);
    }
    return server;
};

exports.stop = async() => {
    await server.stop();
    logger.info('server stopped');
};