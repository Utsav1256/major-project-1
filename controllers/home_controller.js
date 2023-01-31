//first I need to reference the post model

const Post = require("../models/post"); // now  i am inside the controller -> ../ -> to go one step up
module.exports.home = function (request, response) {
  // return response.end('<h1> Express is up for Codeial!</h1>'); // I remove this line because it is sending dometing directly to the Browser

  //console.log(request.cookies);
  // response.cookie('user_id', 25);  //changing the value

  //this query will return all the posts
  // post.find({}, function(err, posts) {
  //     return response.render('home', {
  //         title: "Codeial | Home",
  //         posts: posts //passing on all the posts
  //     });
  // });

  //  Populating the user of each post
  Post.find({})
    .populate("user") // because in models->posts.js this is user
    .populate({
      path: "comments", // because in models->posts.js this is comments
      populate: {
        path: "user",
      },
    })
    .exec(function (err, posts) {
      // console.log(posts);
      return response.render("home", {
        title: "Codeial | Home",
        posts: posts, //passing on all the posts
      });
    });
};
// module .exports.home = function(request, response) {s}
// Now I need to access this fn. in routes
