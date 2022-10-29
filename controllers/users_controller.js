const User = require('../models/user');


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
      if(request.body.password != request.body.confirm_password) {
         return response.redirect('back');
      }

      // if password is same
      User.findOne({email: request.body.email}, function(err, user) {
         if(err) {
            console.log('error in finding user in signing up');
            return;
         }

         // if user is not found or the user is not there
         if(!user) {
            User.create(request.body, function(err, user) {
               if(err) {
                  console.log('error in creating user while signing up');
                  return;
               }

               // if not, then the user is created
               // then where do we send the user to
               // the sign in page
               return response.redirect('/users/sign-in');
            })
         }
         // if user is already present then, what we do
         // we redirect back to the sign-up page
         else {
            return response.redirect('back');
         }
         // in both the cases
         // when password does not match with confirm_password or the user already exists,
         // we are sending back to the sign-up page
      })
}


// sign in and create a session for the user
module.exports.createSession = function(request, response) {
   return response.redirect('/');
}
// when passport.js uses the fn.'LocalStrategy' to authenticate the user, 
// the control comes over here
// and this redirects to the home page
