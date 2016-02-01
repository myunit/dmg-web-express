var express = require('express');
var router = express.Router();
var soap = require('../soap/soap-ifs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页 - 大内购 - 联盟企业员工的内部福利' });
});

router.get('/apply', function(req, res, next) {
  res.render('apply', { title: '企业申请 - 大内购 - 联盟企业员工的内部福利' });
});

router.post('/apply', function(req, res, next) {
  console.log('req:' + JSON.stringify(req.body));
  soap.apply(null, function (err, result){
    console.log('res: ' + JSON.stringify(result));
    res.send({apply:1});
  });
});

module.exports = router;
