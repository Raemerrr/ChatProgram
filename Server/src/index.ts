import * as net from "net";

(() => {
    let server: net.Server = net.createServer((socket: net.Socket) => {
        console.log(`Local : ${socket.localAddress}:${socket.localPort}`);

        //Client to Server
        socket.on('data', (data) => {
            console.log(`${data.toString()}`);
        });

        socket.on('end', function () {
            console.log(`Client disconnected`);
        });


        socket.on('error', function (err) {
            console.log(`Socket Error: ${JSON.stringify(err)}`);
        });

        socket.on('timeout', function () {
            console.log('Socket Timed Out');
            socket.end();
        });

        //Client Close
        socket.on('close', () => {
            console.log(`Client disconnected`);
        });
        socket.write(`Welcome to Server`);
    });
    server.listen(3333, () => {
        console.log('listening on 3333');
    });
})();