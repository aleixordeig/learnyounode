var http = require('http')
var url =  process.argv[2]
http.get(url, function (response){
	response.setEncoding('utf-8');
	 response.on("data", function (data){
	 	console.log(data)
	 })
})

// Other way

var http = require('http')
var through2 = require('through2')
var urlToGet = process.argv[2]

var streamTransform = through2( function(chunk, _, next) {
  chunk = chunk + '\n'
  this.push(chunk)
  next()
})

http.get(urlToGet, function( readableResponse ) {

  readableResponse.setEncoding('utf8')

  readableResponse
    .pipe(streamTransform)
    .pipe(process.stdout)

})