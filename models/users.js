const mongoose = require('../utils/dbHelper');
const Schema = mongoose.Schema;
let User = new Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', User);