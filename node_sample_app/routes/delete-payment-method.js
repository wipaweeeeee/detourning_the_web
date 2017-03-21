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

    gateway.customer.find(uid, function(err, customer) {
	if (err == null){
	    
	    var token = customer.paymentMethods[0].token
		
	    gateway.paymentMethod.delete(token, function (err) {
		if (err == null) {
		    console.log("[m8] Payment method deleted: " + token);
		    res.send(token);
		} else {
		    console.log("[m8] ERROR in payment method delete: " + err.type);
		    res.send("error:payment-method:delete");
		};
	    });
	} else {
	    // If the customer cannot be found, it will return a notFoundError.
	    console.log("[m8] ERROR in customer find: " + err.type);
	    res.send("error:customer:find");
	};
    });
});


module.exports = router;
