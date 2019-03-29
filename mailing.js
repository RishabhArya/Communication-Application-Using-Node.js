var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));0

app.post('/post-mailingdetails', function (req, res) {
  res.send('Data received:\n' + JSON. stringify(req.body));
  //console.log(req.body['yourmail']);
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: req.body['yourmail'],
    pass: req.body['password']
  }
});

var mailOptions = {
  from: req.body['yourmail'],
  to: req.body['sendermail'],
  subject: req.body['subject'],
  text: req.body['content']
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});
app.listen(3000, () => console.info('Application running on port 3000'));
