var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req,res){
  res.render('index',{title:'Happy Pets'})
})
 


module.exports = router;
6