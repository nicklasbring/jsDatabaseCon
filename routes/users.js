var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";



/* GET users listing. */
router.get('/', function (req, res, next) {
  MongoClient.connect(url, (err, db) => {
    console.log("We are connected");
    if (!err) {
      var dbo = db.db('userdb');
      dbo.collection('users').find({}).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
    }
  });
});

module.exports = router;
