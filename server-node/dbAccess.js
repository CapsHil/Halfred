const JSONdb = require('simple-json-db');
const plugs = new JSONdb('./db/plugs.json');

module.exports = {
	addPlug: function (id, name, onId, offId) {
		plugs.set(id, "{name: "+name+", plugIdOn: "+onId+", plugIdOff: "+offId+"}");
		plugs.sync();
	}
};