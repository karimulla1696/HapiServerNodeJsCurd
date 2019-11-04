const hapiI18n = require('hapi-i18n');
require('dotenv').config();
const defaultLan = process.env.DEFAULT_LANGUAGE;

const i18n = {
    plugin: hapiI18n,
    options: {
        locales: ['en', 'ru', 'de', 'ar'],
        directory: './locales',
        languageHeaderField: 'lan',
        defaultLocale: defaultLan
    }
};

module.exports = {
    i18n,
};