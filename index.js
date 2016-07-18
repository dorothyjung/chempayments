// server-side code
var express = require('express');
var stormpath = require('express-stormpath');
var port = process.env.PORT || 5000;

var app = express();
var admin = express();

app.set('port', port);

// stormpath user auth API setup
app.use(stormpath.init(app, {
  website: true
}));

// static assets and formatting code
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.get('/about', function (req, res) {
  res.render('pages/index');
});

app.get('/login', function (req, res) {
  next();
});

app.get('/lessons', function (req, res) {
  res.render('pages/energy');
});

app.get('/lessons/energy', function (req, res) {
  res.render('pages/energy');
});

app.get('/lessons/kinetics', function (req, res) {
  res.render('pages/energy');
});

app.get('/lessons/keq', function (req, res) {
  res.render('pages/energy');
});

app.get('/lessons/ph', function (req, res) {
  res.render('pages/energy');
});

app.get('/lessons/echem', function (req, res) {
  res.render('pages/energy');
});

app.get('/prep', function (req, res) {
  res.render('pages/energy');
});

app.get('/prep/categorized', function (req, res) {
  res.render('pages/energy');
});

app.get('/prep/qanda', function (req, res) {
  res.render('pages/energy');
});

app.get('/reading/', function (req, res) {
  res.render('pages/energy');
});

app.get('/topics', function (req, res) {
  res.render('pages/energy');
});

app.get('/logout', function (req, res) {
  // form(action='/logout', method='POST', id="logout_form")
});

app.on('stormpath.ready', function() {
  app.listen(app.get('port'));
  console.log('Node app is running on port', app.get('port'));
});


