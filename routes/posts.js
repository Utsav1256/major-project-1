const express = require('express');
const router = express.Router();

console.log('router loaded');

const postsController = require('../controllers/posts_controller');

router.get('/', postsController.posts);

module.exports = router;
