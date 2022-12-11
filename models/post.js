// importing mongoose
const mongoose = require('mongoose');

// creating schema -> we create schema whenever we creates a model/collection
const postSchema =  new mongoose.Schema({
    content: {
        type: String,
        required: true // true -> the data would be saved
    },
    users: {
        // linking it to the user
        type: mongoose.Schema.Types.ObjectId, // it is a reference, this is refering to an objectId
        ref: 'User'  //refer to which Schema -> obviously User. So, User is the schema we are refering to.
    }
}, {
    timestamps: true 
});

// Before exporting we need to tell that this is going to a model in the database.
const post = mongoose.model('Post', postSchema); // Post -> name of the model.

// exporting the model. Wherever we use it we just import this file.
module.exports = Post;