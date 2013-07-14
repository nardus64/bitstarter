var express = require('express');
server app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
  response.send(fs.readFile Sync('index.txt',,function(err,dat)){
      if (err) { throw err;}};
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
