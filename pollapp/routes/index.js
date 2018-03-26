var express = require('express');
var router = express.Router();

/* Bodyparser setup */
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: false
}));

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: htmlData });
});

/*GET/POST CreatePoll page */
router.get('/createpoll', function(req, res, next){
  res.render('createpoll', {title: "Create Poll"});
  
});

router.post('/createpoll',function(req,res){
  var a2 = req.body.answer2;
  var htmlData = 'Hello:' + a2;
  //res.send(htmlData);
  console.log(htmlData);
  
  return res.redirect('/');
});



module.exports = router;
