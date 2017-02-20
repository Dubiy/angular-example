'use strict';

let express = require('express'),
    app = express(),
    config = require('./config'),
    bodyParser = require('body-parser'),
    http = require('http').Server(app),
    mailgun = require('mailgun-js')({apiKey: config.mailgunApiKey, domain: config.mailgunDomain}),
    port = process.env.PORT || config.port;

app.use(express.static(__dirname + '/static/'));

app.use(bodyParser.json());
app.post('/send-email', (req, res, next) => {
    console.log(req.body);

    let data = {
        from: config.mailgunFrom,
        to: config.adminEmail,
        subject: 'Heroku portfolio - contact form',
        html: `<h1>You have new submission</h1>
	       <p>Name: <b>${req.body.form.name}</b></p>
	       <p>Email: <b>${req.body.form.email}</b></p>
	       <p>Message: <b>${req.body.form.message}</b></p>
               <p>Submitted at: ${new Date()}</p>`
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(data, body);
    });
    res.json(req.body);
});

http.listen(port, function () {
    console.log(`Server running at localhost:${port}`);
});
