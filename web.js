var express = require('express');
var app = express.createServer(express.logger());
var data = new Buffer(100);
var error = new Buffer(50);
var text = fs.readFileSync('index.txt','utf8');
fs = require('fs');
app.get('/', function(request, response)
{
  response.send(text);
// console.log(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
