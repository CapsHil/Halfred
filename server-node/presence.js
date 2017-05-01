const readLastLines = require('read-last-lines');

module.exports = {
	getLastPresenceDate: function () {
		let lastDate = '';
		readLastLines.read('./testfile.txt', 1)
			.then((lines) => lastDate = lines);
		return lastDate;
	}
}