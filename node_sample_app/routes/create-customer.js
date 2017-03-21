var express = require('express');
var router = express.Router();
var braintree = require('braintree');
var bodyParser = require('body-parser');


var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   '2qdyv4534xqwgvym',
    publicKey:    '2ky254xv7f3zbcpb',
    privateKey:   '8b16f04a85d6e198f8414d5fb31d8f37'
});


router.post('/', function (req, res, next) {
    var uid = req.body.uid;
    var email = req.body.email;

    gateway.customer.create({
	id: uid, // not customerId
	email: email,
    }, function (err, result) {
	if (result.success) {
	    console.log("[m8] New user.");
	} else if (!result.success) {
	    console.log("[m8] Returning user.");
	} else if (err != null) {
	    console.log("[m8] ERROR: " + err.type);
	    res.send("error");
	}
    });
});


module.exports = router;
