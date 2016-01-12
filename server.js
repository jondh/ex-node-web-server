var express = require('express');
var app = express();
var PORT = 3000;

var middleware =  {
    requireAuth: function (req, res, next) {
        console.log('private route son!');
        next();
    },
    logger: function(req, res, next) {
        console.log("req: [date: " + new Date().toLocaleString() + "][method: " + req.method + '][url: ' + req.originalUrl + "]");
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function (req, res) {
    res.send('aboot');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('express server started at port ' + PORT);
});