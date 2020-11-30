var express = require('express');
var app = express();
var port = normalizePort(process.env.PORT || 8080);

app.use(express.static(__dirname));
app.get('/', function(req, res) {
  res.sender('index');
})

server.listen(port, function(){
  console.log('Server started');
})

