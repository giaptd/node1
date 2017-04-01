// Declare our dependencies
var express = require('express');

// Create our express app
var app = express();

// Set the view engine to use EJS as well as set the default views directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/');

// This tells Express out of which directory to serve static assets like CSS and images
app.use(express.static(__dirname + '/public'));

// Home page
app.get('/', function(req, res) {
    res.render('index');
})

// Our MovieAnalyst Website will listen on port 3000. Feel free to change this as you see fit, just know that you can't have multiple processes listening on the same port.
app.listen(8000);