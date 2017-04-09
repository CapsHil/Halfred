const fs = require("fs");
const db = require("./dbAccess");
const vocal = require("./vocal");

module.exports = function(app) {

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
}