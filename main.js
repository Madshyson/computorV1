parser = require('./Ressources/parser.js');
discriminant = require('./Ressources/discriminant.js');
resolver = require('./Ressources/resolver.js');

parser.parser(process.argv,  function (parsed) {
    console.log("--The eqution is : --");
    console.log(process.argv[2]);
    console.log("Reduced formula is :");
    console.log(parsed.a + 'X2 +' + parsed.b + 'X + ' + parsed.c + '  = 0');
    discriminant.discriminant(parsed.eq, function (disc) {
        console.log('The discriminant is :' + disc.delta);
        resolver.resolver(disc);
    })
});
