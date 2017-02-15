/**
 * Created by Administrateur on 15/02/2017.
 */

const http = require('http');

const server = http.createServer( function( req, res) {
   //console.log(arguments);
    res.statusCode = 200;
    res.setHeader('Content-type' , 'text-plain');
    switch(req.url)
    {
        case '/' :
            res.end('Hello');
            break;
        case '/toto' :
            res.end('Hello toto');
            break;
        default :
            res.statusCode = 404;
            res.end('Error page inconnue');

    }

});
server.listen(8080, function() {
    console.log('server listening');
});