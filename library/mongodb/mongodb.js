const mongo = require('mongodb').MongoClient;
require('dotenv').config();
const logger = require('../../web/commonModel/logger');

let db;

async function getConn() {
    try {
        const url = process.env.MONGO_URL;
        const client = await mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(process.env.DATABASE);
        // collection = db.collection('Books');
        logger.info('connected to the database...');
        return db;
    } catch (e) {
        logger.error(e.message);
    }
}

const get = () => { return db };
module.exports = {get, getConn };