var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/login', function(req, res, next) {
  res.send('login');
});
router.post('/register', function(req, res, next) {
  console.log(req.body.sap);
});
module.exports = router;
