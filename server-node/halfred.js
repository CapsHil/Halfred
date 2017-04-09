const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app);

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Halfred REST Api exposing at http://%s:%s", host, port)
});
