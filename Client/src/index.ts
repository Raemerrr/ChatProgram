import * as net from "net";


(() => {
  let client: net.Socket = net.connect({ port: 3333, host: 'localhost' }, () => {
    console.log(`$ Connected!`);
    console.log(`Local : ${client.localAddress}:${client.localPort}`);
    console.log(`Remote : ${client.remoteAddress}:${client.remotePort}`);

    client.setTimeout(500);
    client.setEncoding('utf8');
    client.write('Hello, Server!');
  });

  client.on('data', (data) => {
    console.log(`${data.toString()}`);
  });

  client.on('end', function () {
    console.log(`Client disconnected`);
  });

  client.on('error', function (err) {
    console.log(`Socket Error: ${JSON.stringify(err)}`);
  });

  client.on('timeout', function () {
    console.log('Socket Timed Out');
    client.end();
  });

  client.on('close', function () {
    console.log('Socket Closed');
  });
})();