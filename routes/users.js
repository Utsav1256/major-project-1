const express = require('express');
const router = express.Router();//here we have defined the router
// we need to first import passport
const passport = require('passport');

//Now I need to access my controller (users_controller.js) from this route(users.js)
const usersController = require('../controllers/users_controller');

const postsController = require('../controllers/posts_controller');


// now I just need to map a route to this users_controller's fn.
router.get('/profile', passport.checkAuthentication, usersController.profile);

router.get('/posts', postsController.posts);

router.get('/sign-up', usersController.signUp);

router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);//matching the route

// when i need to create a session, i need to create a route.
// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    
    // if the user fails to sign in, we need to send that user to back to the sign-in page
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

router.get('/sign-out', usersController.distroySession);

module.exports = router;


