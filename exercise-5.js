var fs = require('fs')
var pathDir = process.argv[2]
var extensionFile = process.argv[3]

fs.readdir(pathDir, function(err, listFiles){
	if (err) throw err
	
})