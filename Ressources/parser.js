function parser(argv, callback) {
    console.log('Parser');
    console.log(argv);
    if(argv.length <= 2) {
        console.log('Not enough arguments, type -h for commands and regular uses');
        process.exit;
    } else if (argv.length > 4) {
        console.log('Too much arguments, type -h for commands and regular uses');
        process.exit;
    } else if (argv.length === 3 && argv[2].indexOf('-') && argv[2].indexOf('h') && argv[2].length === 2) {
        console.log("Regular use: node main.js 'Equation'\n Usable arguments:\n -h : Help \n -i: Information on Polynomial equation resolution");
        process.exit;
    } else if () {

    }
}

module.exports = {parser};