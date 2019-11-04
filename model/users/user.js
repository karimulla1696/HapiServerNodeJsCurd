const db = require('../../library/mongodb');
let collecionName = 'Products';

const deleteOneBook = async(params) => {
    return await db.get()
        .collection(collecionName)
        .deleteOne(params);
};

const findAllBook = async(params) => {
    return await db.get()
        .collection(collecionName)
        .find(params).sort().toArray();
};

const findOneBook = async(params) => {
    return await db.get()
        .collection(collecionName)
        .findOne(params);
};

const postOneBook = async(params) => {
    return await db.get()
        .collection(collecionName)
        .insertOne(params);
};

const updateOneBook = async(params, params2) => {
    return await db.get()
        .collection(collecionName)
        .updateOne(params, params2);
};

module.exports = { deleteOneBook, updateOneBook, postOneBook, findOneBook, findAllBook };