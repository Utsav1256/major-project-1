module.exports.home = function(request, response) {
    return response.end('<h1> Express is up for Codeial!</h1>');
}
//2. Now I need to access this fn. in routes