/**
 * Created by Administrateur on 15/02/2017.
 */

const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));

server.use( function (req,res, next) {
    res.setHeader('content-type', 'text/plain');
    next();
});

server.all('/', function (req,res) {
    res.setHeader('content-type', 'text/plain');
    res.end('Hello');
});

server.all('/toto', function (req,res) {
    res.end('Hello TOTO ? !!!');
});

server.use( function (req,res, next) {
    res.statusCode = 404;
    res.send('Erreur 404')

});

server.listen(8080, function() {
    console.log('server listening');
});