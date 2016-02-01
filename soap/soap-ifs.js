/**
 * @author qianqing
 * @create by 16-2-1
 * @description
 */

var soap = require('soap');
var url = 'http://10.10.5.120:1188/CM/CustomerActionService.svc?WSDL';
var xml = require('xml');
var utils = require('./utils');

module.exports = {
	companyJoin: companyJoin
};

function createCompanyJoinXml(obj) {
	var xmlObj = [{
		CreateCompanyJoinIn: [
			{
				_attr: {
					xmlns: 'http://tempuri.org/'
				}
			},
			{
				message: [
					{
						_attr:{
							'xmlns:d4p1': 'http://schemas.datacontract.org/2004/07/MYun.BPC.Contract.CustomerMgmt.Data',
							'xmlns:i': 'http://www.w3.org/2001/XMLSchema-instance'
						}
					},
					{
						'd4p1:Header': [
							{
								'd4p1:OperationUser': [
									{
										_attr: {
											'i:nil': 'true'
										}
									}
								]
							},
							{
								'd4p1:Sender': [
									{
										_attr: {
											'i:nil': 'true'
										}
									}
								]
							}
						]
					}
				]
			},
			{
				data: [
					{
						_attr: {
							'xmlns:d4p1': 'http://schemas.datacontract.org/2004/07/MYun.BPC.Contract.CustomerMgmt.Data',
							'xmlns:i': 'http://www.w3.org/2001/XMLSchema-instance'
						}
					},
					{
						EditDate: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service'
								}
							}, utils.formatByT(new Date())
						]
					},
					{
						EditUser: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service',
									'i:nil': 'true'
								}
							}
						]
					},
					{
						EditUserSysno: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service'
								}
							}, 0
						]
					},
					{
						InDate: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service'
								}
							}, utils.formatByT(new Date())
						]
					},
					{
						InUser: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service',
									'i:nil': 'true'
								}
							}
						]
					},
					{
						InUserSysno: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service'
								}
							}, 0
						]
					},
					{
						Status: [
							{
								_attr: {
									'xmlns': 'http://schemas.datacontract.org/2004/07/MYun.Framework.Service',
									'i:nil': 'true'
								}
							}
						]
					}, {
						'd4p1:CompanyAddress': obj.address
					}, {
						'd4p1:CompanyIndustry': obj.industry
					}, {
						'd4p1:CompanyName': obj.company
					}, {
						'd4p1:ContactEmail': obj.email
					}, {
						'd4p1:ContactName': obj.fullName
					}, {
						'd4p1:ContactPhone': obj.phone
					}, {
						'd4p1:SysNo': 0
					}
				]
			}
		]
	}];

	return xml(xmlObj, true);
};

function companyJoin(arg, cb) {
	var callback = cb;
	soap.createClient(url, function (err, client) {
		if (err) {
			callback(err, null);
		}
		console.log('xml: ' + createCompanyJoinXml(arg));
		client.CreateCompanyJoinIn(createCompanyJoinXml(arg), function (err, result) {
			callback(err, result.CreateCompanyJoinInResult);
		});
	});
}