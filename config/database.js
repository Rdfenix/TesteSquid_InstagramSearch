var mongoose     =  require('mongoose');

module.exports = function(uri){
  mongoose.connect(uri);

  mongoose.connection.on('connected', function(){
    console.log("Moongose conectado em " + uri);
  });

  mongoose.connection.on('disconnected', function(){
    console.log("Mongoose desconectado " + uri);
  });

  mongoose.connection.on('error', function(erro){
    console.log("Mongoose ! Erro na conexao: " + erro);
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose desconectado pela aplicação");
      process.exit(0);
    });
  });

};
