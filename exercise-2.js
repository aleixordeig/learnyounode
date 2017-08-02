
var sum = 0;

for (var i = 2; i < process.argv.length; i++) {	
	sum += parseInt(process.argv[i], 10)
}

console.log(sum);


// Other Way

var aNumbers = process.argv.slice(2)

aNumbers.reduce( function())