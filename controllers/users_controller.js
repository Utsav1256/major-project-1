module.exports.profile = function(request, response) {
   return response.end('<h1>User Profile</h1>');
}
// Now this controller is ready to be access by a router, now that route needs to be access by my browser, browser tells me that you need to go to this route and the conntroller/action returns whatever data it has. 
// if the controller/action is not present then it throws an error that, you cannot access it.
// ok!
// Now I need to create a route for it.
// Everytime I create a controller/action, if I wanted to be accessible, it needs a route.
// so i will go and access a route.
