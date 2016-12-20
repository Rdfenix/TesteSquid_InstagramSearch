var passport        =  require('passport');
var InstaStrategy   =  require('passport-instagram').Strategy;
var mongoose        =  require('mongoose');

module.exports = function(){
  var User = mongoose.model('user');

  passport.use(new InstaStrategy({
    clientID: '881d39436e3244d99a46b1b437d36ced',
    clientSecret: '982c5920811541c2b07bbe0e582087be',
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
