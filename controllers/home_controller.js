module.exports.home = function(request, response) {
    // return response.end('<h1> Express is up for Codeial!</h1>'); // I remove this line because it is sending dometing directly to the Browser

    console.log(request.cookies);
    // response.cookie('user_id', 25);  //changing the value
    return response.render('home', {
        title: "Home"
    }); 
}
// module .exports.home = function(request, response) {s}
// Now I need to access this fn. in routes