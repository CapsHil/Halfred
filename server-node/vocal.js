const exec = require('child_process').exec;
const execFile = require('child_process').execFile;


module.exports = {

    say: function(toSay) {
        execFile('./say.sh', [toSay], (error, stdout, stderr) => {
            if (error) {
				console.log(error);
                throw error;
            }
			console.log(error);
            console.log(stdout);
        });
    }
}