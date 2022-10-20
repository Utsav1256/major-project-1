// This is the 'ENTRY point' for all the routes
// The App index.js file will send in the request to the routes/index and this will further route us to all the different routes files 
// that will be present in the website code.

const express = require('express');

const router = express.Router();

console.log('router loaded');

//2. to acces that fn.
const homeController = require('../controllers/home_controller')

router.get('/', homeController.home);
// this router is accessing home_controller

// considering this to be the route of routes (or index of routes), I want thisroute to be controlling all the other routes or having the list of all the other routes.
router.use('/users', require('./users'));

//for any further routes access from here
// router.use('/routerName', require('./routerfile)); 

router.use('/posts', require('./posts'));






module.exports = router; //1. here we have exorted the router