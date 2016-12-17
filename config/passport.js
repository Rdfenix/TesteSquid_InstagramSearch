var passport        =  require('passport');
var InstaStrategy   =  require('passport-instagram').Strategy;
var mongoose        =  require('mongoose');

module.exports = function(){
  var User = mongoose.model('user');

  passport.use(new InstaStrategy({
    clientID: '2fd5122094aa4e09ac501cccb51d7f7b',
    clientSecret: '84ee2bede0764636b9153592d56f82af',
    callbackURL: 'http://localhost:3000/auth/instagram/callback'
  }, function(accessToken, refreshToken, profile, done){
    User.findOrCreate(
      {"login": profile.username},
      {"nome": profile.username},
      function(erro, usuario){
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null, usuario);
      }
    );
  }));

  passport.serializeUser(function(usuario, done){
    done(null, usuario._id);
  });

  passport.deserializeUser(function(id, done){
    User.findById(id).exec()
      .then(function(usuario){
        done(null, usuario);
      });
  });
};
