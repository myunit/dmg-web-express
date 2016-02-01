/**
 * @author qianqing
 * @create by 16-2-1
 * @description
 */

var soap = require('soap');
var url = 'http://10.10.5.130:10008/PC_API/WalletService.svc?WSDL';
var xml = require('xml');

module.exports = {
	apply: apply
};

function apply(arg, cb) {
	soap.createClient(url, function(err, client) {
		if (err) {
			cb(err, null);
		}
		var obj = {};
		obj.CustomerNo = 24198;
		var xmlObj = [{
			GetMoneyByCustomerNoForApp: [
				{
					_attr: {
						xmlns: 'http://tempuri.org/'
					}
				},
				{
					queryString: JSON.stringify(obj)
				}
			]
		}];
		client.GetMoneyByCustomerNoForApp(xml(xmlObj, true), function(err, result) {
			cb(err, result);
		});
	});
}