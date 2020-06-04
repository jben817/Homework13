var connection = require("./connection");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function (tableInput, userInfo, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    //{burger_name: "cheese", devoured: false}

    console.log(queryString);

    connection.query(queryString, [tableInput, userInfo], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function (tableInput, whatToUpdate, whereToUpdate, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    //{id: 5}

    console.log(queryString);

    connection.query(
      queryString,
      [tableInput, whatToUpdate, whereToUpdate],
      function (err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  },
};

module.exports = orm;
