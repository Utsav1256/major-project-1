const express = require('express');
const router = express.Router();//here we have defined the router


//Now I need to access my controller (users_controller.js) from this route(users.js)
const usersController = require('../controllers/users_controller');

// now I just need to map a route to this users_controller's fn.
router.get('/profile', usersController.profile);


module.exports = router;


