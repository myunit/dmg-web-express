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

router.post('/company-join', function(req, res, next) {
  soap.companyJoin(req.body, function (err, result){
    if (err) {
      console.error('companyJoin err: ' + err);
      res.send({status: 0});
    } else {
      if (result.HasError === 'true') {
        console.error('companyJoin err:' + result.Faults.MessageFault.ErrorDescription);
        res.send({status: 0});
      } else {
        res.send({status: 1});
      }
    }
  });
});

module.exports = router;
