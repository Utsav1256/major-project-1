const express = require('express');

const router = express.Router();

console.log('router loaded');

//2. to acces that fn.
const homeController = require('../controllers/home_controller')

router.get('/', homeController.home);

module.exports = router; //1. here we have exorted the router