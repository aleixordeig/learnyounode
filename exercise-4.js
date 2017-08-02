var fs = require('fs')
var save = undefined
var content = fs.readFile(process.argv[2], 'utf-8', function(err, data) {
    if (err) throw err
    save = data.toString().split('\n')
    console.log(save.length - 1)

});