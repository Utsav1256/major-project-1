const express = require('express');
const router = express.Router();//here we have defined the router
const passport = require('passport');// requiring passport


const postsController =require('../controllers/posts_controller');

// putting 2nd level of check at controller level
// if a user tries to fiddle (a dishonest action) with my website by creating a form by editing the html of the page -> the userwill be able to submit the form and send the data to the particular URL
// I have created a level of check at the url action level, not lettinf user penetrate intomy action withoutpassing the check of authentication
// so, if the user is not signed-in, that user will not be able to reach tha action of creating a post
// So always identity will be establishedbefore creating a post
router.post('/create', passport.checkAuthentication, postsController.create);

module.exports = router;