const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
 // we need to require both the things (passport and passport-local-strategy) for this to work

app.use(express.urlencoded());

app.use(cookieParser());


app.use(express.static('./assets'));

app.use(expressLayouts);
// we need todo this before requiring the routes
// bcz. in the routes those views going to be rendered

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



// set up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session( {
    // what is the name of my cookie
    name: 'codeial',
    // whenever encryption happens there is a key to encode and decode it.
    // so to encode it we are going to use a key
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        // we need to give an age to the cookie, that for how long should this will valid.
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());


// here we are using that express router
app.use('/', require('./routes/index'));


app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`)

});