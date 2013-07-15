var express = require('express');
var app = express.createServer(express.logger());
var dat = new Buffer(100);
var err = new Buffer(50);
var fs = require('fs');
app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.txt', function(err,dat){
 if (err) { throw err;}
  return (dat.toString);})
);});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

