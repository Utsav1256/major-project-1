// requiring mongoose
const mongoose = require('mongoose');

// creating a schema
const commentSchema = new mongoose.Schema( {
    content: {
        type: String,
        required: true
    },
    // comment belong to a user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    timestamps: true
});

// Before exporting we need to tell that this is going to a model in the database.
const Comment = mongoose.model('Comment', commentSchema);// Comment -> name of the model.

// exporting the model. Wherever we use it we just import this file.
module.exports = Comment;