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
    if ((req.body['adid']=='admin') && (req.body['pass']=='pass')) {
        console.log("Success!");
        res.redirect('/detailschange.html');
      }
    else {
        res.send('Wrong ID and Password-Sorry you cannot Login\n' + JSON. stringify(req.body));
        console.log("Wrong ID and Password");
      }
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