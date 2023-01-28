// importing mongoose
const mongoose = require('mongoose');

// creating schema -> we create schema whenever we creates a model/collection
const postSchema =  new mongoose.Schema({
    content: {
        type: String,
        required: true // true -> the data would be saved
    },
    user: {
        // linking it to the user
        type: mongoose.Schema.Types.ObjectId, // it is a reference, this is refering to an objectId
        ref: 'User'  //refer to which Schema -> obviously User. So, User is the schema we are refering to.
    },
    // we very frequently required to fecth all the comments of a post
    // so, one of the ways to make this fetching of comments fast is to include hte ids of all the comments here in the array
    // including the array of ids of all comments in this post schema itself
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {
    timestamps: true //timestamps is something which automatically introduces two fields -> 'created at' and 'updated at'
});

// Before exporting we need to tell that this is going to a model in the database.
const Post = mongoose.model('Post', postSchema); // Post -> name of the model.

// exporting the model. Wherever we use it we just import this file.
module.exports = Post;