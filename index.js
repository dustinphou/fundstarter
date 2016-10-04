var fs = require('fs');
var http = require('http');
var path = require('path');
var filePath = path.join(__dirname, '/public', 'index.html')

http.createServer(function(request, response) {

	fs.readFile(filePath, 'utf8', function (err,data) {
		if (err) 
		{
			return console.log(err);
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	});
	
}).listen(8080);

