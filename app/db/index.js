'use strict';
const config = require('../config');
const logger = require('../logger');
const mongoose = require('mongoose').connect(config.dbURI);

//Log an error if the connection fails
mongoose.connection.on('error', error => {
    logger.log('error','Mongoose connection error: ' + error);
});

// Create a Schema that defines the structure for storing the user data
const chatUser = new mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String
});

// Turn the schema into a usable model
let userModel = mongoose.model('chatUser', chatUser);

module.exports = {
    mongoose,
    userModel
}