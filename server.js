require.paths.unshift(__dirname + "/vendor");

var http        = require('http'),
    sys         = require('sys'),
    nodeStatic  = require('node-static/lib/node-static');

var server = http.createServer(function(request, response) {
  request.addListener('end', function() {
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    response.write(sys.inspect(request));
    response.end();
  });
}).listen(8000);
