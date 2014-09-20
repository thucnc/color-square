var express  = require('express');
var methodOverride = require('method-override'); 


var app = express();
app.use(methodOverride());
app.use(express.static(__dirname + '/src'));

// application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendfile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

var port = Number(process.env.PORT || 8080);
app.listen(port, function() {
    console.log("App listening on port "+port);
});