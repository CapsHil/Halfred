var exec = require('child_process').exec;


function puts(error, stdout, stderr) { console.log(stdout) }

module.exports = {

    say: function(toSay) {
        exec('sudo mpg321 "http://translate.google.com/translate_tts?tl=fr&client=tw-ob&q='+toSay+'"', puts);
    }

}