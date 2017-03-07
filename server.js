var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
require('dotenv').config();

var config = require('./config');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

app.use("/ourteam",function(req,res){
  res.sendFile(path + "ourteam.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

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
