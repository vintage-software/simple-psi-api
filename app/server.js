var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var psi        = require('psi');

// configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   // (accessed at GET http://localhost:8080/api)
});

router.get('/psi', function(req, res) {
    psi('www.google.com', function (err, data) {
        res.json(data);
    });
});

router.route('/psi/:site')
.get(function(req, res) {
    psi(req.params.site, function (err, data) {
        res.json(data);
    });
});

// REGISTER OUR ROUTES all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);