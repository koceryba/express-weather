var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var connection = require('./../db');

var registerController = require('./../controllers/auth/register-controller');

var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/auth', (req, res, next) => {
  console.log('IN AUTH')
  return '!~~!!!'
});
// app.post('/auth', registerController.register);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

module.exports = router;