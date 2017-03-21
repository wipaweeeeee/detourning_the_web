var express = require('express');
var router = express.Router();
var braintree = require('braintree');


var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   '2qdyv4534xqwgvym',
    publicKey:    '2ky254xv7f3zbcpb',
    privateKey:   '8b16f04a85d6e198f8414d5fb31d8f37'
});


router.get('/', function (req, res, next) {
    gateway.clientToken.generate({}, function (err, response) {
	res.send(response.clientToken);
    });
});


module.exports = router;
