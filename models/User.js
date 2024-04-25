const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userModel = mongoose.Schema({
    id: { type: 'number', required: true, unique: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    firstname: { type: 'string', required: true },
    lastname: { type: 'string', required: true },
    admin: { type: 'boolean', required: true },
})

userModel.plugin(uniqueValidator);

module.exports = mongoose.model('User', userModel);