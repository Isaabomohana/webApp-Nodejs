var express = require("express");
var app = express();
var path = require('path');
require('dotenv').config();

var config = require('./config');

app.use(express.static(path.join(__dirname, '/public')))

app.listen(process.env.PORT || 3000,function(){
  console.log("Live at Port 3000");
});

 var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = config.mongodb.url;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
