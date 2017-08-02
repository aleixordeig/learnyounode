var http = require('http')
var parse = require('url-parse')
var port = process.argv[2]

http.createServer(function (req, res) {
 var myURL = parse(req.url, true)
 var pathName = myURL.pathname
 console.log(pathName)
 var query = myURL.query
 var convertion = routes[pathName]
 var response = convertion(query)
 res.writeHead(200, {'Content-Type' : 'application/json'})
 res.write(JSON.stringify(response))
 res.end()

}).listen(port)


function parseUnix (ISOtime){ // de iso a unix
	return {'unixtime' : new Date(ISOtime * 1000) } 
}

function parseISO (unixTime){ // de unix a iso
		console.log(unixTime)
		var date = unixTime.toISOString()
		var hour = date.getHour()
		var minute = date.getMinute()
		var second = date.getSecond()

	return { 
		'hour' : hour ,
		'minute': minute ,
		'second': second
	} 
}

var routes = {
	'/api/isotime' : function(query){
		return parseUnix(query.iso)
	},

	'/api/unixtime': function(query){
		return parseISO(query.iso)
	}
}

