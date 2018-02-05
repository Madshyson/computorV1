parser = require('./Ressources/parser.js');
discriminant = require('./Ressources/discriminant.js');
resolver = require('./Ressources/resolver.js');

parser.parser(process.argv,  function (parsed) {
   discriminant.discriminant(parsed.eq, function (disc) {
      resolver.resolver(disc);
   })
});
