var express = require('express');
var app = express.createServer(express.logger());
var dat = new Buffer(200,'utf8');
var err = new Buffer(50,'utf8');
var fs = require('fs');
app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html', encoding='utf8',function(err,dat){
 if (err) { throw err;}
  return (dat.toString());})
);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
