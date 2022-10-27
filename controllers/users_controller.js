const User = require('../models/user');


module.exports.profile = function(request, response) {
   // to check if there is user_id in the cookies
   if(request.cookies.user_id) {
      User.findById(request.cookies.user_id, function(err, user) {
         if(user) {
            return response.render('users_profile', {
               title: "User Profile",
               user: user
            })
         }
         else { 
         return response.redirect('/users/sign-in');
         }
      });
   }
   else {
      return response.redirect('/users/sign-in');
   }
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

   // steps to authenticate:
   // find the user
   User.findOne({email: request.body.email}, function(err, user) {
      if(err) {
         console.log('error in finding user in signing in');
         return;
      }

       // handle user found
       if(user) {
         // handle password which doesn't match
         if(user.password != request.body.password) {
            return response.redirect('back');
         }

         // handle session creation
         response.cookie('user_id', user.id);
         return response.redirect('/users/profile');

       } 
       else {
          // handle user not faund
          return response.redirect('back');
       }
   })
}

// sign out 
module.exports.signOut = function(request, response) {
   return response.redirect('/users/sign-in');
}