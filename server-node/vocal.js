const exec = require('child_process').exec;
const execFile = require('child_process').execFile;


module.exports = {

    say: function(toSay) {
        execFile('echo', [toSay], (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
        });
    }
}