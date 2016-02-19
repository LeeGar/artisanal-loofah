var User = require('../db/schemas/user');


module.exports = {
  get: function (linkedin_id, callback) {
    User.findAll({ where: {linkedin_id: linkedin_id}})
    .then(function(user) {
      callback(user);
    });
  },
  post: function (username, callback) {
    User.create({name: username}).then(function(user){
      callback(user.get('id'));
    });
  }
};
