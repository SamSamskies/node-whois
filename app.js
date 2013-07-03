var fs = require('fs');
var whois = require('whois');
var file = "domainNames.txt"

function convertToDomainNames(keywords) {
	names = keywords.replace(/ /g, '').split("\n")
	return names.map(addDotCom)
}

function addDotCom(name) {
	return name + ".com"
}

// read the file with the keyword phrases
fs.readFile(__dirname + "/" + file, "Utf-8", function(err, fileContents){
  if (err) { console.error(err.stack); return }

  domainNames = convertToDomainNames(fileContents)

  for (var dn in domainNames) {
  	whois.query(domainNames[dn])
  }
});
