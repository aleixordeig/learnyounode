// var http = require('http')
// var net = require('net')
// var strftime = require('strftime') 
// var port = process.argv[2]

// var server = net.createServer(function(socket) {

//     socket.write(strftime('%B %d, %Y %H:%M:%S'))
// })
// server.listen(port)

// // HALF WAY

// var net = require('net')
// var strftime = require('strftime')
// var port = process.argv[2]
// var counter = 1

// var server = net.createServer(function(socket) {
//     var date = new Date()

//     var year = date.getFullYear()
//     var month = addZero(date.getMonth()) // starts at 0  
//     var day = addZero(date.getDate()) // returns the day of month  
//     var hours = addZero(date.getHours())
//     var minutes = addZero(date.getMinutes())

//     var patternDate = "YYYY-MM-DD hh:mm"
//     var formattedDate = patternDate
//         .replace('YYYY', year)
//         .replace('MM', month)
//         .replace('DD', day)
//         .replace('hh', hours)
//         .replace('mm', minutes)

// })

// server.listen(port)

// GOD WAY

var net = require('net')
var strftime = require('strftime')
var port = process.argv[2]
var counter = 1

var server = net.createServer(function(socket) {

	var date = strftime('%B %d, %Y %H:%M:%S') + '/n'
	socket.end(date)

})

server.listen(port)