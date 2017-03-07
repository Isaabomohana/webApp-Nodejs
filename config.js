var config = {};

config.mongodb = {};
config.mongodb.url = process.env.MONGODB_CONNECT_URL || 'url';

module.exports = config;
