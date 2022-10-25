const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, //to create a user you need to pass an email
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


// telling mongoose that this is a model
const user = mongoose.model('User', userSchema);

// exporting it
module.exports = User;