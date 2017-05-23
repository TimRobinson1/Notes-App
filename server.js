var http = require('http');
var fs = require('fs')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + 'ADD_THE_FILE_PATH_HERE', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
