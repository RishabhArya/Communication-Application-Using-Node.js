var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.post('/post-feedback', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Registrations");
        var myobj = {  firstname :req.body['firstname'],lastname :req.body['lastname'],email :req.body['email'],col :req.body['col'], sap :req.body['sap'], number : req.body['number'],Address :req.body['Address'], City :req.body['City'], examtaken :req.body['examtaken'], course : req.body['course'] };
        dbo.collection("Details").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });      
  res.send('Data received:\n' + JSON. stringify(req.body));
  console.log(req.body);
});
/*
app.get('/view-feedbacks',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
}); 
*/
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );