require.paths.unshift(__dirname + "/vendor");

var http        = require('http'),
    sys         = require('sys'),
    nodeStatic  = require('node-static/lib/node-static');

var server = http.createServer(function(request, response) {
  var file = new nodeStatic.Server('./public', {
    cache: false
  });
  request.addListener('end', function() {
    file.serve(request,response);
  });
}).listen(8000);
