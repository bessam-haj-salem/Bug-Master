"use strict";
var rethinkdb = require('rethinkdb');
var async = require('async');

class db {
  setupDb() {
    var self = this;
    async.waterfall([
      function(callback) {
        self.connectToRethinkDbServer(function(err,connection) {
          if(err) {
            return callback(true,"Error in connecting RethinkDB");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
        rethinkdb.dbCreate('requests').run(connection,function(err, result) {
          if(err) {
            console.log("Database already created");
          } else {
            console.log("Created new database");
          }
          callback(null,connection);
        });
      },
      function(connection,callback) {
      //  rethinkdb.db('requests').table('search').delete().run(connection, callback)
        rethinkdb.db('requests').tableCreate('search').run(connection,function(err,result) {
          connection.close();
          if(err) {
            console.log("search table already created");
          } else {
            console.log("Created new table search");
          }
        })
          rethinkdb.db('requests').tableCreate('detail').run(connection,function(err,result) {
            connection.close();
            if(err) {
              console.log("detail already created");
            } else {
              console.log("Created new table detail");
            }
          callback(null,"Database is setup successfully");
        });
        rethinkdb.db('requests').tableCreate('booking').run(connection,function(err,result) {
          connection.close();
          if(err) {
            console.log("booking already created");
          } else {
            console.log("Created new table booking");
          }
        callback(null,"Database is setup successfully");
      });
      }
    ],function(err,data) {
      console.log(data);
    });
  }

  connectToRethinkDbServer(callback) {
    rethinkdb.connect({
      host : 'localhost',
      port : 28015
    }, function(err,connection) {
      callback(err,connection);
    });
  }

  connectToDb(callback) {
    rethinkdb.connect({
      host : 'localhost',
      port : 28015,
      db : 'requests'
    }, function(err,connection) {
      callback(err,connection);
    });
  }
}

module.exports = db;
