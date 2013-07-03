var exec = require('child_process').exec;

exports.query = function(name) {
  // use the whois shell command
  exec('whois ' + name, function(err, results){
    var strResults = '';
    if(results.indexOf("No match for") > -1){
      strResults = " is available";
    } else {
      strResults = " is taken";
    }
    console.log(name + strResults);
  });
}
