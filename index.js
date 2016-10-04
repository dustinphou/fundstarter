var fs = require('fs');
var http = require('http');
var path = require('path');
var filePath = path.join(__dirname, '/public', 'index.html');
var data = fs.readFileSync(filePath, 'utf8');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(data);
	response.end();
}).listen(8080);