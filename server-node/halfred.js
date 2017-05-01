const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
         next();
});

require('./routes')(app);

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Halfred REST Api exposing at http://%s:%s", host, port)
});
