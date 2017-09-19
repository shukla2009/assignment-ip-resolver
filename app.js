'use strict';
var config = require('./config');
var logger = require('./logger')(module);
var util = require('util');
var https = require('https');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('This is ip resolver service');
});

app.get('/ip/:ip', function (req, res) {
    logger.info('resolving : ' + req.params.ip);
    if ('127.0.0.1' === req.params.ip || '1' === req.params.ip) {
        return res.send({location: 'localhost'});
    }
    let options = {
        host: 'freegeoip.net',
        port: 443,
        path: `/json/${req.params.ip}`,
        method: 'GET'
    };

    let request = https.request(options, function (result) {
        let message = '';
        result.on('data', function (chunk) {
            message += chunk;
        });
        result.on('end', function () {
            if (result.statusCode === 200) {
                return res.send(JSON.parse(message));
            } else {
                res.status(404).send(`Not able to resolve ip ${req.params.ip}`);
            }
        });
    });
    request.end();
});
app.all('/*', function (req, res) {
    res.status(404).send('Not Found');
});

app.set('port', config.port);

var server = app.listen(app.get('port'), function () {
    logger.info(util.format('Express server listening on port %s', server.address().port));
});
