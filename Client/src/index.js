"use strict";
exports.__esModule = true;
var net = require("net");
(function () {
    // console.log('a');
    // let rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // rl.question('Is this example useful? [y/n] ', (answer) => {
    //   switch (answer.toLowerCase()) {
    //     case 'y':
    //       console.log('Super!');
    //       break;
    //     case 'n':
    //       console.log('Sorry! :(');
    //       break;
    //     default:
    //       console.log('Invalid answer!');
    //   }
    //   rl.close();
    // });
    var client = net.connect({ port: 3333, host: 'localhost' }, function () {
        console.log("$ Connected!");
        console.log("Local : " + client.localAddress + ":" + client.localPort);
        console.log("Remote : " + client.remoteAddress + ":" + client.remotePort);
        client.setTimeout(500);
        client.setEncoding('utf8');
        client.write('Hello, server! Love, Client.');
    });
    client.on('data', function (data) {
        console.log("" + data.toString());
    });
    client.on('end', function () {
        console.log("Client disconnected");
    });
    client.on('error', function (err) {
        console.log("Socket Error: " + JSON.stringify(err));
    });
    client.on('timeout', function () {
        console.log('Socket Timed Out');
    });
    client.on('close', function () {
        console.log('Socket Closed');
    });
})();
