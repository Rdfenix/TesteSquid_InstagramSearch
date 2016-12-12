var express = require('express');

module.exports = function(){
  var app = express();

  app.set('porta', 3000);

  return app;
};
