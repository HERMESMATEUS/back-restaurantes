const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();
const api = require('./routes/index');
var cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
api(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

// https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
// openssl genrsa -out key.pem
// openssl req -new -key key.pem -out csr.pem
// openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
// rm csr.pem