const db = require('../../library/mongodb');
let collecionName = 'Products';

const deleteOneProduct = async(params) => {
    return db.get()
        .collection(collecionName)
        .deleteOne(params);
};

const findAllProducts = async(params) => {
    return db.get()
        .collection(collecionName)
        .find(params).sort().toArray();
};

const findOneProduct = async(params) => {
    return await db.get()
        .collection(collecionName)
        .findOne(params);
};

const postOneProduct = async(params) => {
    return await db.get()
        .collection(collecionName)
        .insertOne(params);
};

const updateOneProduct = async(params, params2) => {
    return db.get()
        .collection(collecionName)
        .updateOne(params, params2);
};

module.exports = { deleteOneProduct, updateOneProduct, postOneProduct, findOneProduct, findAllProducts };