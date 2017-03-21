var express = require('express');
var app = express();
var pg = require('pg');
var braintree = require('braintree');
var bodyParser = require('body-parser');

var home = require('./routes/index');
var clientToken = require('./routes/client-token');
var createCustomer = require('./routes/create-customer');
var createSubscription = require('./routes/create-subscription');
var updateSubscription = require('./routes/update-subscription');
var cancelSubscription = require('./routes/cancel-subscription');
var findPaymentMethod = require('./routes/find-payment-method');
var createPaymentMethod = require('./routes/create-payment-method');
var deletePaymentMethod = require('./routes/delete-payment-method');
var requestReceipt = require('./routes/request-receipt');


app.set('port', (process.env.PORT || 5000));


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use('/', home);
app.use('/client-token', clientToken);
app.use('/create-customer', createCustomer);
app.use('/create-subscription', createSubscription);
app.use('/update-subscription', updateSubscription);
app.use('/cancel-subscription', cancelSubscription);
app.use('/find-payment-method', findPaymentMethod);
app.use('/create-payment-method', createPaymentMethod);
app.use('/delete-payment-method', deletePaymentMethod);
app.use('/request-receipt', requestReceipt);


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
