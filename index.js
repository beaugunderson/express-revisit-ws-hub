'use strict';

var nconf = require('nconf');
var express = require('express');
var http = require('http');
var app = express();
var WebSocketServer = require('ws').Server;
var server = http.createServer(app);

nconf.argv().env().file({ file: 'local.json'});

var wss = new WebSocketServer({
  server: server
});

wss.broadcast = function (data) {
  console.log('broadcasting');
  for (var i in this.clients) {
    this.clients[i].send(data);
  }
};

wss.on('connection', function (ws) {
  ws.on('message', function (data) {
    console.log('received ', data);
    wss.broadcast(data);
  });
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/index.html');
})

var port = nconf.get('port');

server.listen(port, function() {
  console.log("listening on port", port);
});
