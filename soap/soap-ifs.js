/**
 * @author qianqing
 * @create by 16-2-1
 * @description
 */

var soap = require('soap');
var url = 'http://10.10.5.130:10008/PC_API/WalletService.svc?WSDL';
var xml = require('xml');

module.exports = {
	companyJoin: companyJoin
};

function createCompanyJoinXml(obj) {
	var xmlObj = [{
		CreateCompanyJoniIn: [
			{
				_attr: {
					xmlns: 'http://tempuri.org/'
				}
			},
			{
				CompanyName: obj.company
			},
			{
				CompanyIndustry: obj.industry
			},
			{
				CompanyAddress: obj.address
			},
			{
				ContactName: obj.fullName
			},
			{
				ContactEmail: obj.email
			},
			{
				ContactPhone: obj.phone
			}
		]
	}];

	return xml(xmlObj, true);
};

function companyJoin(arg, cb) {
	soap.createClient(url, function(err, client) {
		if (err) {
			cb(err, null);
		}
		client.CreateCompanyJoniIn(createCompanyJoinXml(arg), function(err, result) {
			cb(err, result);
		});
	});
}