const Joi = require('joi');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../../../library/mongodb');

const signupValidator = Joi.object({
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    emailId: Joi.string().email().lowercase().required(),
    countryCode: Joi.number().integer().positive().required(),
    mobile: Joi.number().integer().positive().required(),
    password: Joi.string().min(5).max(10).required(),
    status: Joi.boolean().required()
    // profilePic: Joi.required()

});

const handler = async (request, h) => {

    try {

        const user = await db.get().collection('Products').findOne({ emailId: request.payload.emailId });
        if (user) return ' user with given email Id already exist';

        const user1 = await db.get().collection('Products').findOne({ mobile: request.payload.mobile });
        if (user1) return 'user with given mobile number already exist';

        const salt = await bcrypt.genSalt(10);
        //request.payload.password = await bcrypt.hash(request.payload.password, salt);
        const hashedPassword = await bcrypt.hash(request.payload.password, salt);
        const result = await db.get().collection('Products').insertOne({
            firstName: request.payload.firstName,
            lastName: request.payload.lastName,
            emailId: request.payload.emailId,
            countryCode: request.payload.countryCode,
            mobile: request.payload.mobile,
            //password: request.payload.password,
            password: hashedPassword,
            status: request.payload.status,
            // profilePic: request.payload.profilePic
        });
    console.log(", process.env.JWT_PRIVATE_KEY", process.env.JWT_PRIVATE_KEY);
        const token = jwt.sign({ result }, process.env.JWT_PRIVATE_KEY);
        return h.response({ message: request.i18n.__(200) }).header('x-auth-token', token);


    } catch (e) {
        return e.message;
    }
};

module.exports = {
    signupValidator,
    handler
};