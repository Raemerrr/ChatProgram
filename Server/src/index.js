"use strict";
exports.__esModule = true;
var net = require("net");
(function () {
    var server = net.createServer(function (socket) {
        console.log("Local : " + socket.localAddress + ":" + socket.localPort);
        //Client to Server
        socket.on('data', function (data) {
            console.log("" + data.toString());
        });
        socket.on('end', function () {
            console.log("Client disconnected");
        });
        socket.on('error', function (err) {
            console.log("Socket Error: " + JSON.stringify(err));
        });
        socket.on('timeout', function () {
            console.log('Socket Timed Out');
            socket.end();
        });
        //Client Close
        socket.on('close', function () {
            console.log("client disconnected");
        });
        socket.write("Welcome to Server");
    });
    server.listen(3333, function () {
        console.log('listening on 3333');
    });
})();
