const express = require('express');
const router = express.Router();//here we have defined the router



const postsController =require('../controllers/posts_controller');

router.post('/create', postsController.create);

module.exports = router;