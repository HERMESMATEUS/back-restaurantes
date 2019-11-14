const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();
const routes = require('./routes/routes');
const Generals = require('./routes/Generals');
const Authentication = require('./routes/Authentication');
var cors = require('cors');
const https = require('https')
const fs = require('fs');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
// routes(app);
Authentication(app);
Generals(app);

// Start the server


const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

// https.createServer(options, app).listen(port, (error) => {
//     if (error) return console.log(`Error: ${error}`);
//     console.log(`Server listening on port ${server.address().port}`);
// });

// https.createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
// }).listen(port);


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

// https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
// openssl genrsa -out key.pem
// openssl req -new -key key.pem -out csr.pem
// openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
// rm csr.pem