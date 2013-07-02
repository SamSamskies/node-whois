#! /usr/bin/node

// import
var fs = require('fs');
var exec = require('child_process').exec;

// this is the filename for the file containing all the domain names
var file = process.argv[2];

// read the file with the keyword phrases
fs.readFile(__dirname + "/" + file, "Utf-8", function(err, data){
	//create an array of phrases
	var arrLines = data.split("\n");
	for( var key in arrLines){
		//remove the spaces and convert to a .com domain name
		var domainName = arrLines[key].replace(/ /g, "") + ".com";
		// check to see if the domain name is available 
		query(domainName);
	}	
});



// function to query whois
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