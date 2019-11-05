const db = require('../../../library/mongodb');
const logger = require('../../commonModel/logger');
const bcrypt = require('bcrypt');
const libMethod = require('../../../model/users');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
require('dotenv').config();

const handler = async(request, h) => {
    try {
        const condition = {
            $or: [
                { emailId: request.payload.emailId },
                { mobile: request.payload.mobile }
            ]
        };

        const user = await libMethod.findOneProduct(condition);
        if (!user) return 'Invalid email or mobile whatever you have entered';
        const validPass = bcrypt.compare(request.payload.password, user.password);
        if (!validPass) return 'Invalid password';
        const exTime = Number(process.env.EXPIRES_TIME);
        const accessToken = generate.genToken(user.emailId, user.mobile, exTime);
        const refreshToken = generate.genToken(user.emailId, user.mobile, exTime + 3600);
        const tokens = { accessToken, refreshToken };
        const result = await libMethod.updateOneProduct(condition, tokens);
        if (!result) return 'something went wrong';
        return h.response({
            message: "successfully signIn",
            tokens: tokens
        });

    } catch (e) {
        logger.error(e.message);
    }

};
const payload = {
    emailId: Joi.string().lowercase().email().description('enter email id').required(),
    mobile: Joi.number().positive().description('enter mobile number').required(),
    password: Joi.string().min(5).max(15).description('enter password').required()
};

module.exports = {
    handler,
    payload
};
