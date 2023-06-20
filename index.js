/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sabuj Howlader
 *
 */
// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const data = require('./lib/data')

// app object - module scaffolding
const app = {};
data.create = ('test', 'newFile', { 'name': 'Bangladesh', 'language': 'bangla' }, (err) => {
    console.log(`error was thrown: ${err.message}`);
});

// configuration
app.config = {
    port: 3000,
};


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
