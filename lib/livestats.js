var http        = require('http'),
    sys         = require('sys'),
    nodeStatic  = require('node-static/lib/node-static');

function LiveStats(options){
  if(!(this instanceof arguments.callee)){
    return new arguments.callee(arguments);
  }
  
  var self = this;
  
  self.settings = {
    port: options.port,
    geoipServer: {
      hostname: options.geoipServer.hostname,
      port: options.geoipServer.port || 80
    }
  };
  
  var server = http.createServer(function(request, response) {
    var file = new nodeStatic.Server('./public', {
      cache: false
    });

    request.addListener('end', function() {
      file.serve(request,response);
    });
  });
  server.listen(self.settings.port);
} 

module.exports = LiveStats;
    
