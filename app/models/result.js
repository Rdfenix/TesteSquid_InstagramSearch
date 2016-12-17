var mongoose     =  require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    nome: String,
    imagem: String,
    like: String
  });

  return mongoose.model('media', schema);
};
