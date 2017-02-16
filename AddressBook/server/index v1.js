/**
 * Created by Administrateur on 15/02/2017.
 */

const express = require('express');

const server = express();
server.all('/', function (req,res) {
    res.end('Hello');
});

server.all('/toto', function (req,res) {
    res.end('Hello TOTO ? !!!');
});



server.listen(8080, function() {
    console.log('server listening');
})