// const user = require('./user');
const logger = require('../commonModel/logger');
// const signup = require('./signup');
const get = require('./user/get');
const post = require('./user/post');
const put = require('./user/put');
const del = require('./user/delete');

const allRoutes = [].concat(get, post, put, del);
module.exports = allRoutes;