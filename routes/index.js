var express = require('express');
var router = express.Router();

/* GET home page. */ 

/// beside: default route made by node ///

/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

/// beside: maded route by dev ///

router.get("/", function (req, res) {
  res.redirect("/catalog");
});
module.exports = router;
