var http = require('http');
var app = require('./config/express')(app);
          require('./config/passport')();
          require('./config/database')('mongodb://localhost/insta');

http.createServer(app).listen(app.get('porta'), function(){
  console.log('Servidor na porta ' + app.get('porta'));
});
