const express = require('express');

const app = express();

const port = 8000;

const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);
// we need todo this before requiring the routes
// bcz. in the routes those views going to be rendered

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// here we are using that express router
app.use('/', require('./routes/index'));

// set up the view engine 
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`)

});