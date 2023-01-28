const express = require('express');
const router = express.Router();//here we have defined the router
const passport = require('passport');// requiring passport

const commentsController = require('../controllers/comments_controller');
router.post('/create', passport.checkAuthentication, commentsController.create);

module.exports = router;