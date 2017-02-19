'use strict';

console.log(process.env);

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    http = require('http').Server(app),
    port = process.env.PORT || 3005;

app.use(express.static(__dirname + '/static/'));

app.use(bodyParser.json());
app.post('/send-email', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);

});

http.listen(port, function () {
    console.log(`Server running at localhost:${port}`);
});