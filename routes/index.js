var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页 - 大内购 - 联盟企业员工的内部福利' });
});

module.exports = router;
