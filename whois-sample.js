var exec = require('child_process').exec;

exports.query = function(name){
	exec('whois ' + name, function(err, results){
		var strResults = '';
		if(results.indexOf("Expiration") > -1){
			strResults = " is taken";
		} else {
			strResults = " is available";
		}
		console.log(name + strResults);
	});
}


