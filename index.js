var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about', function(request, response) {
  response.render('pages/about');
});

app.get('/lessons', function(request, response) {
  response.render('pages/lessons');
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


