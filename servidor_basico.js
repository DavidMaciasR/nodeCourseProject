/**
 * Created by david on 1/11/2018.
 */

var http= require('http');

var server= http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Wake up, Neo .. \n');

});

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en 127.0.0.1');