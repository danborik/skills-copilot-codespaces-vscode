// Create web server
// Create a route for comments
// Return comments array

var express = require('express');
var app = express();
var comments = require('./comments');

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});