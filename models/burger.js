var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", cb);
  },
  insertOne: function (userInfo, cb) {
    orm.insertOne("burgers", userInfo, cb);
  },
  updateOne: function (condition, cb) {
    orm.updateOne("burger", { devoured: true }, condition, cb);
  },
};
module.exports = burger;
