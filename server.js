var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/Insta');

http.createServer(app).listen(app.get('porta'), function(){
  console.log('Servidor na porta ' + app.get('porta'));
});
