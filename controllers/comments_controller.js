const Comment = require('../models/comment');
const Post = require ('../models/post');

module.exports.create = function(req, res) { // create -> since we are creating
    console.log(req.body);
    // let's find the post first
    Post.findById(req.body.post, function(err, post) {
        // If the post is faund 
        if(post) {
            // then we will create the comment
            Comment.create({ // this is create method
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment) {
                if(err) {
                    console.log("Error in creating the comment");
                    return;
                }
                // Adding comment to the post
                post.comments.push(comment);// this is something that is given by mongoDB -> this comment is pushed to the post
                post.save(); // whenever I am updating something, I need to call save() after it -> So, I make the changes in the object, save() tells the database that this is the final version, so save this.
                // before that it is just in the memory , in the RAM. But, once I called save(), it get saved in the database 

                return res.redirect('/');
            });
        }
    })
}