var mongoose     =  require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    type: {
      type: String
    },
    likes: {
      count: {
        type: String
      }
    },
    user: {
      username: {
        type: String
      },
      profile_picture: {
        type: String
      },
      id: {
        type: String
      }
    },
    images: {
      low_resolution: {
        url: {
          type: String
        }
      }
    },
    video: {
      low_resolution: {
        url: {
          type: String
        }
      }
    }
  });

  return mongoose.model('Media', schema);
};
