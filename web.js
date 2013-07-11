var express = require('express');
var fs(require
var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
  response.send(fs.readfile('index.txt'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
