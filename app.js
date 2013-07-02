#! /usr/bin/node

// import
var fs = require('fs');
var exec = require('child_process').exec;

// 1. Add code to get the domainName.txt file as an argument passed to the app.


// read the file with the keyword phrases
fs.readFile(__dirname + "/" + file, "Utf-8", function(err, data){
	// 2. Add code here to covert each line into a domain name
});



// function to query whois
// 3. convert this to a custom module
function query(name){
	// make thh whois shell command
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