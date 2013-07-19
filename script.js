
// Grab the names of the directory. 
// Only directory / filesystem operation
var dir = require('fs').readdirSync('./');

// Init. a map of keys identified as collisions
var idMap = {};

// Loop through each file
dir.forEach(function(fileName) {

	// N.B. Replace 9 with id number length
	var testName = fileName.substring(0,9);

	// Where to hold collisions
	var nameBundle = [];	

	// Set up test expression
	var expr = new RegExp('^' + testName);

	// Cycle through inside (N.B. this is now n^2 operations)
	dir.forEach(function(subjectFileName) {

		// If a match, push
		if(('' + subjectFileName).match(expr)) {
			nameBundle.push(subjectFileName);
		}
	});

	// If collision, add to the idMap
	if(nameBundle.length > 1) {
		idMap[testName] = nameBundle;
	}
});

// Log the map
console.log(idMap);
