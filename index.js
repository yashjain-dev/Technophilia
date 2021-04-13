// importing express
const express = require('express');
// initializing express
const app = express();
// initializing post number
const port = 7700;

// setting up mongoose to connect to the database
const db = require('./config/mongoose');

// defining path for static files
app.use(express.static('./assets'));

app.use(express.urlencoded({ extended: true }));

// requiring layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
//extract style and scripts from sub pages into layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// setting up views
app.set('view engine' , 'ejs');
app.set('views', './views');

// redirecting requestd to routes
app.use('/', require('./routes/index'));

// telling app to listen all requests made on the port
app.listen(port, function(err){
    if(err) {
        console.log(`Error runing the server on ${port} and error ${err}`);
        return;
    }

    console.log(`Server running on port ${port}`);
});