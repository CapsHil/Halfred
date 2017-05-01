const fs = require("fs");
const db = require("./dbAccess");
const vocal = require("./vocal");
const presence = require("./presence");
const request = require('request');

module.exports = function(app) {

    app.get('/api/weather', function (req, res) {
        console.log("Get weather");
        request('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=59f6ee8fc58d73946a76f9053c575bbc&units=metric&lang=fr', function (error, response, body) {
            res.status(200);
            res.end(body);
        });
    });

    app.post('/api/plugs/add', function (req, res) {
        console.log("POST request from " + req.headers['x-real-ip'] + " on /api/plugs/add");
        db.addPlug(req.body.id, req.body.name, req.body.plugIdOn, req.body.plugIdOff);
        console.log("Plug with id " + req.body.id + " named " + req.body.name + " has been added");
        res.status(200);
        res.end("Plug with id " + req.body.id + " named " + req.body.name + " has been added");
    });

    app.delete('/api/plugs/:id', function (req, res) {
        console.log("DELETE request from " + req.headers['x-real-ip'] + " on /api/plugs/" + req.params.id);
        db.deletePlug(req.body.id);
        console.log("Plug with id " + req.body.id + " has been deleted");
        res.status(200);
        res.end("Plug with id " + req.body.id + " has been deleted")
    });

    app.get('/api/plugs/:id/on', function (req, res) {
        console.log("GET request from " + req.headers['x-real-ip'] + " on /api/plugs/" + req.params.id + "/on");
        let plug = db.getPlug(req.params.id);
        console.log(plug.name);
        console.log("Switch plug [" + req.params.id + "] on");
        res.status(200);
        res.end('Plug with id ' + req.params.id + ' named ' + db.getPlug(req.params.id).name + ' is now active');
    });

    app.post('/api/say', function (req, res) {
        console.log("POST request from " + req.headers['x-real-ip'] + " on /api/say");
        vocal.say(req.body.say);
        res.status(200);
        res.end('Halfred is speaking');
    });

    app.get('/api/lastPresence', function (req, res) {
        console.log("Get request from " + req.header['x-real-ip'] + " on /api/lastPresence");
        res.status(200);
        presence.getLastPresenceDate(function(date) {
            date = date.replace(/(\r\n|\n|\r)/gm,"");
            res.end(date);
        });
    })
}