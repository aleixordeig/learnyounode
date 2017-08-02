var http = require('http')
var through2 = require('through2')
var port = process.argv[2]

http.createServer(function(req, res) {
	if (req.method === 'POST')
	    req.pipe(through2(function(chunk, encoding, callback) {
	            this.push(chunk.toString().toUpperCase())
	            return callback()
	        })).pipe(res)
	else{
		res.end()
	}
	    }).listen(port)