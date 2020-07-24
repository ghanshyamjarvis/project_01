const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const path = require('path');

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Expose-Headers', 'X-My-Custom-Header, X-Another-Custom-Header');
  next(); // make sure we go to the next routes and don't stop here
});

app.use('/', require('./controllers/UserController'));

module.exports = app;