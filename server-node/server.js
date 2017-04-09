var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var exec = require('child_process').exec;
var db = require("./dbAccess");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/plugs/add', function(req, res) {
	db.addPlug(req.body.id, req.body.name, req.body.plugIdOn, req.body.plugIdOff);
	console.log("Plug with id "+req.body.id+" named "+req.body.name+" has been added");
	res.status(200);
	res.end("Plug with id "+req.body.id+" named "+req.body.name+" has been added");
});

app.delete('/api/plugs/:id', function(req, res) {
	var plug = db.deletePlug(req.body.id);
    console.log("Plug with id "+req.body.id+" named "+plug.name+" has been deleted");
    res.status(200);
    res.end("Plug with id "+req.body.id+" named "+plug.name+" has been deleted")
});

app.get('/api/plugs/:id/on', function(req, res) {
	console.log("Switch plug with id "+req.params.id+" on");
	res.status(200);
	res.end('Plug with id '+req.params.id+' is now active');
});

app.get('/api/say', function(req, res) {
	exec('mpg321 "http://translate.google.com/translate_tts?tl=fr&client=tw-ob&q=Bonjour"');
    res.status(200);
    res.end('Halfred is speaking');
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Halfred REST Api exposing at http://%s:%s", host, port)
});
