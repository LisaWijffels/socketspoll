var express = require('express');
var router = express.Router();

var a1;
var a2;
var q;

/* Bodyparser setup */
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: false
}));

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('index', { answer2: a2, answer1: a1, question: q });
  
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { answer2: a2, answer1: a1, question: q });
  
});

/*GET/POST CreatePoll page */
router.get('/createpoll', function(req, res, next){
  res.render('live', {title: "Create Poll"});
  
});

router.post('/createpoll',function(req,res,next){
  a2 = req.body.answer2;
  a1 = req.body.answer1;
  q = req.body.question;
  
  
  res.redirect('/');
});








module.exports = router;
