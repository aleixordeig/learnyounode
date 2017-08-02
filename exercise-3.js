// var fs = require('fs')
// fs.readFileSync('/path/to/file')

var fs = require('fs')
var content = fs.readFileSync(process.argv[2]);
var text = content.toString().split('\n')
console.log(words.length - 1)
