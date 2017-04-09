var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var exec = require('child_process').exec;
var db = require("./dbAccess");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/addPlug', function(req, res) {
	db.addPlug(req.body.id, req.body.name, req.body.plugIdOn, req.body.plugIdOff);
	console.log("Plug with id "+req.body.id+" named "+req.body.name+" has been added");
	res.status(200);
	res.end("Plug added");
});

app.get('/api/:id/on', function(req, res) {
	console.log("Switch plug with id "+id+" on");
});

app.get('/api/say', function(req, res) {
	exec('mpg321 "http://translate.google.com/translate_tts?tl=fr&client=tw-ob&q=Bonjour"');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Halfred REST Api exposing at http://%s:%s", host, port)
});
