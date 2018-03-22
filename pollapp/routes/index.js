var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createpoll', function(req, res, next){
  res.render('createpoll', {title: 'CreatePoll'});
});

module.exports = router;
