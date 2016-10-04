var fs = require('fs');
var http = require('http');
var path = require('path');
var filePath = path.join(__dirname, '/public', 'index.html');

fs.stat(filePath, (err, stats) =>
	{
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(stats.size);
			var buff = Buffer.alloc(stats.size, 1);
			fs.open(filePath, 'r', function (err, fd) {
				if(err)
				{
					return console.log(err);
				}
				else
				{
					fs.read(fd, buff, 0, stats.size)
					var data = buff.toString('utf8');
					http.createServer(function(request, response) 
					{
						response.writeHead(200, {'Content-Type': 'text/html'});
						response.write(data);
						response.end();
					}).listen(process.env.PORT || 8080);
				}
			});
		}
	}); //messy callbacks, fix later




