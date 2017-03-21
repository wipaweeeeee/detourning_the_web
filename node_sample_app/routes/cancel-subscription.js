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


// If the subscription cannot be found, it will return a notFoundError.
router.post('/', function (req, res, next) {
    var subscriptionId = req.body.subscription_id;

    gateway.subscription.cancel(subscriptionId, function (err, result) {	
	if (err == null) {
	    console.log("[m8] Subscription deleted: " + subscriptionId);
	    res.send(subscriptionId);
	} else {
	    console.log("[m8] ERROR: " + err.type);
	    res.send("error:subscription:cancel");
	};
    });
});


module.exports = router;
