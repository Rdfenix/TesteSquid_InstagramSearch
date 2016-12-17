var express      =  require('express');
var load         =  require('express-load');
var bodyParser   =  require('body-parser');
var cookieParser =  require('cookie-parser');
var session      =  require('express-session');
var passport     =  require('passport');

module.exports = function(){
  var app = express();

  // variavel de ambiente
  app.set('porta', 3000);

  //middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(cookieParser());
  app.use(session({
    secret: 'insta',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  /*
  load ira carregar todos os arquivos para que não precise usar o require dentro dos outros modulos
  mais a frente. o cwd server para que as funções de dentro do express procure somente dentro da pasta app
  e não procure fora (diretorio raiz).
  */
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
