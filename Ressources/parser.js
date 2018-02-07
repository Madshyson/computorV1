function reducer () {

}
function parser(argv, callback) {
    let regEq = /([\d\.\d]*X*\^*\d*[+\- ]*){3} *= *([\d.\d]*X*\^*\d*[+\- ]*|0)*/g;
    if(argv.length <= 2) {
        console.log('Not enough arguments, type -h for commands and regular uses');
        process.exit;
    } else if (argv.length > 4) {
        console.log('Too much arguments, type -h for commands and regular uses');
        process.exit;
    } else if (argv.length === 3 && !argv[2].indexOf('-h') && argv[2].length === 2) {
        console.log("Regular use: node main.js 'Equation'\nUsable arguments:\n-h : Help \n-i: Information on quadractic equation resolution");
        process.exit;
    } else if (argv.length === 3 && !argv[2].indexOf('-i') && argv[2].length === 2) {
        console.log("In algebra, a quadratic equation (from the Latin quadratus for \"square\") is any equation having the form\n\n" +
                    "    ax^2+bx+c=0\n\n" +
                    "where x represents an unknown, and a, b, and c represent known numbers such that a is not equal to 0.\n" +
                    "A quadratic equation with real or complex coefficients has two solutions, called roots. These two solutions may or may not be distinct, and they may or may not be real.\n" +
                    "We first need to calculate the discriminant often represented by Delta\n\n" +
                    "Delta = b^2 - 4ac.\n" +
                    "This determinant is used to set the number of possible root and if they are real or not :\n\n" +
                    "    Delta > 0 -> two real roots : " + "(-b - sqrt(Delta) / 2a) & (-b + sqrt(Delta) / 2a)\n\n" +
                    "    Delta = 0 -> one real root : " + "(-b / 2a)\n\n" +
                    "    Delta < 0 -> two complex roots : " + "(-b - (i * sqrt(Delta)) / 2a) & (-b + (i *sqrt(Delta)) / 2a)");
        process.exit;
    } else if (argv.length === 3 && argv[2].match(regEq)) {
        console.log(argv[2]);
        process.exit;
    } else {
        console.log('an error occured, type -h for commands and regular uses');
        process.exit;
    }
}

module.exports = {parser};