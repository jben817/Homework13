var connection = require("./connection");


// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

var orm = {
    selectAll: function(whatToSelect, tableInput) {
      var queryString = "SELECT ?? FROM ??";
      connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      console.log(queryString);
  
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
      var queryString = "SELECT ?? FROM ?? AS tOne";
      queryString += " LEFT JOIN ?? AS tTwo";
      queryString += " ON tOne.?? = tTwo.??";
  
      console.log(queryString);
  
      connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
        err,
        result
      ) {
        if (err) throw err;
        console.log(result);
      });
    }
  };
  
  module.exports = orm;
  