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
    var paymentMethodNonce = req.body.payment_method_nonce;

    gateway.paymentMethod.create({
	customerId: uid,
	paymentMethodNonce: paymentMethodNonce,
	options: {
	    makeDefault: true
	}
    }, function (err, result) {
	if (result.success) {
	    // need to use (result.success) because the API does not have error stuff
	    var token = result.paymentMethod.token;
	    console.log("[m8] Payment token created: " + token);
	    res.send(token);
	} else {
	    var msg = result.message;
	    var cvvResponseCode = result.verification.cvvResponseCode;
	    
	    console.log("[m8] message: " + msg);
	    console.log("[m8] CVV response code: " + cvvResponseCode);
	    res.send("error:cvv:" + cvvResponseCode);
	};
    });
});


module.exports = router;
