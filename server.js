var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});


// about page
app.get('/contact', function(req, res) {

  res.render('pages/about')

});

app.listen(8080);

const hostname = '127.0.0.1';
const port = 8080;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});