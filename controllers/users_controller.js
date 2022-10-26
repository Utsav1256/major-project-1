module.exports.profile = function(request, response) {
   // return response.end('<h1>User Profile</h1>');

   return response.render('users_profile', {
      title: "User Profile"
   });
}

// render the sign up page
module.exports.signUp = function(request, response) {
   return response.render('user_sign_up', {
      title: "Codeial | Sign Up"
   });
}

// render the sign in page
module.exports.signIn = function(request, response) {
   return response.render('user_sign_in', {
      title: "Codeial | Sign In"
   });
}

// get the sign up data
module.exports.create = function(request, response) {
   // TODO later
}


// sign in and create a session for the user
module.exports.createSession = function(request, response) {
   // TODO later
}