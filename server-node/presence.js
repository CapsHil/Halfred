const readLastLines = require('read-last-lines');

module.exports = {
	getLastPresenceDate: function (callback) {
		let lastDate = '';
		readLastLines.read('./db/presence_date.txt', 1)
			.then((lines) => callback(lines));
	}
}
