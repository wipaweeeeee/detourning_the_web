var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');


router.post('/', function (req, res, next) {
    var uid = req.body.uid;
    var time = req.body.time;
    var command = "INSERT INTO request_receipt VALUES ('" + uid + "', '" + time + "')";

    console.log(command);
    
    pg.connect(process.env.DATABASE_URL, function (err, client, done) {
	client.query(command, function (err, result) {
	    done();
	    if (err == null) {
		console.log("[m8] Receipt request received");
		res.send("OK");
	    } else {
		console.log("[m8] ERROR in receiving receipt request");
		res.send("error:receipt");
	    }
	});
    });


});


module.exports = router;
