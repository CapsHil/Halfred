const readLastLines = require('read-last-lines');

module.exports = {
	getLastPresenceDate: function (callback) {
		let lastDate = '';
		readLastLines.read('./testfile.txt', 1)
			.then((lines) => callback(lines));
	}
}