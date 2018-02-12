parser = require('./Ressources/parser.js');
discriminant = require('./Ressources/discriminant.js');
resolver = require('./Ressources/resolver.js');

parser.parser(process.argv,  function (parsed) {
    console.log("--The equation is : --");
    console.log(process.argv[2]);
    console.log("Reduced formula is :");
    if(parsed.a === 0.0 && parsed.b === 0.0 && parsed.c === 0.0) {
    	console.log('0 = 0');
    	console.log('There is no value in this equation');
    } else if(parsed.a === 0.0 && parsed.b === 0.0) {
    	console.log(parsed.c + '  = 0');
    	console.log('There is no unkwnown in this equation');
    } else if (parsed.a === 0.0) {
    	console.log(parsed.b + 'X + ' + parsed.c + '  = 0');
    	console.log('This is a not a quadratic equation, the solution is :');
    	console.log('X = ' + ((-1 * parsed.c) / parsed.b));
    } else {
    	console.log(parsed.a + 'X^2 +' + parsed.b + 'X + ' + parsed.c + '  = 0');
	    discriminant.discriminant(parsed, function (disc) {
	        console.log('The discriminant is :' + disc.delta);
	        resolver.resolver(disc);
	    })	
    }
});
