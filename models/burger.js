var ORM = require ('../config/orm.js');

var burgers = {
  all: function(cb) {
    ORM.all("burgers", function(res) {
      cb(res);
    });
  },
  
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};
  
 


module.exports = burgers;