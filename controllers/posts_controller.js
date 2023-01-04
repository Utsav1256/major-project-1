const Post = require('../models/post');

module.exports.create = function(request, response) {
    
    Post.create({ //creating a post and passing on the user
        content: request.body.content,
        user: request.user._id  //user: -> this must be same as of Post schema //not write users: here ;)

    }, function(err, post) {
        if(err) {
            console.log('error in creating a post');
            return;
        }
        return response.redirect('back');
    });
}
