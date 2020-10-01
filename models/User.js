const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: True
    },
    password: {
        type: String,
        required: True
    },
    firstname: {
        type: String,
        required: False
    },
    email: {
        type: String,
        required: True
    },
    zipcode: {
        type: Number,
        required: False
    },
    birthday: {
        type: Date,
        required: True
    },
    state: {
        type: String,
        required: False
    },
});

const User = mongoose.model('User', UserSchema);

module.export = User;