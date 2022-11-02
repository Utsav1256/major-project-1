const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

const mongoose=require('mongoose');

const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
 
const MongoStore =  require('connect-mongo');
// it requires an argument unlike other liberaries  till now
// this requires an argument which is session
// why?? bcz we need to store session information to the database

app.use(express.urlencoded());

app.use(cookieParser());


app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



// set up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');


// mongo store is used to store the session cookiein the db
app.use(session( {
    // what is the name of my cookie
    name: 'codeial',
    // whenever encryption happens there is a key to encode and decode it.
    // so to encode it, we are going to use a key
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        // we need to give an age to the cookie, that for how long should this will valid.
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongoUrl:mongoose.connection._connectionString,
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        // if the connection is not established
        function(err) {
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// here we are using that express router
app.use('/', require('./routes/index'));


app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);

});