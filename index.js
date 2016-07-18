// server-side code
var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

// stormpath user auth API setup
app.use(stormpath.init(app, {
  website: true
}));

// app running on port 5000
app.set('port', (process.env.PORT || 5000));

// stormpath listening on port 3000
app.on('stormpath.ready', function() {
  app.listen(app.get('port') || 3000);
});

// static assets and formatting code
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about', function(request, response) {
  response.render('pages/index');
});

app.get('/lessons', function(request, response) {
  response.render('pages/energy');
});

app.get('/lessons/energy', function(request, response) {
  response.render('pages/energy');
});

app.get('/lessons/kinetics', function(request, response) {
  response.render('pages/energy');
});

app.get('/lessons/keq', function(request, response) {
  response.render('pages/energy');
});

app.get('/lessons/ph', function(request, response) {
  response.render('pages/energy');
});

app.get('/lessons/echem', function(request, response) {
  response.render('pages/energy');
});

app.get('/prep', function(request, response) {
  response.render('pages/energy');
});

app.get('/prep/categorized', function(request, response) {
  response.render('pages/energy');
});

app.get('/prep/qanda', function(request, response) {
  response.render('pages/energy');
});

app.get('/reading/', function(request, response) {
  response.render('pages/energy');
});

app.get('/topics', function(request, response) {
  response.render('pages/energy');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


