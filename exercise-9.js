//    var http = require('http')
//     var bl = require('bl') // 
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
    
//           results[index] = data.toString()
//           count++
    
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }


// //Other Way

// var urls = process.argv.slice(2)
// var http = require('http')
// var finalContent = ''

// urls.map(function(url){
//   return function(callBack){
//     http.get(url, function(readableResponse){
//       readableResponse.setEnconding('utf8')

//       readableResponse.on('data', function(chunk){
//         finalContent += chunk
//       })
//       readableResponse.on('end', function(chunk){
//         callBack(null, finalContent)
//       })

//     })

//   }
// })


// PRO WAY

var urls = process.argv.slice(2)
var http = require('http')
var concat = require('concat-stream')
var async = require('async')
var finalContent = ''


var aUrls = urls.map(function(url){
  return function(callBack){
    http.get(url, function(readableResponse){
      function handleFinal(finalContent){
        callBack(null, finalContent)
      }
      readableResponse
        .setEnconding('utf8')
        .pipe(concat(handleFinal))
})
  }
})

async.series(aUrls, function(err, results){
  if(err) throw err
    results.forEach(function(content){
      console.log(content)
    })
})









