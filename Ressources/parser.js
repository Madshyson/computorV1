function eqCreator (reduced) {
    reduced.left = reduced.left.filter(function(n){ return (n != '' && n != '-' && n != '-X') }); 
    reduced.right = reduced.right.filter(function(n){ return (n != '' && n != '-' && n != '-X') }); 
    let eq = {
        a : 0.0,
        b : 0.0,
        c : 0.0
    };
    for (let i = 0; i < reduced.left.length; i++) {
        if (reduced.left[i].slice(-2) === '^2') {
            eq.a += parseFloat(reduced.left[i]);
        } else if (reduced.left[i].slice(-1) === 'X') {
            eq.b += parseFloat(reduced.left[i]);
        } else  {
            eq.c += parseFloat(reduced.left[i]);
        }
    }
    for (let i = 0; i < reduced.right.length; i++) {
        if (reduced.right[i].slice(-2) === '^2') {
            eq.a -= parseFloat(reduced.right[i]);
        } else if (reduced.right[i].slice(-1) === 'X') {
            eq.b -= parseFloat(reduced.right[i]);
        } else  {
            eq.c -= parseFloat(reduced.right[i]);
        }   
    }
    return(eq);
}   

function reducer (str) {
    let red = str.replace(/\s/g, "");
    red = red.replace(/-/g, "+-");
    let splt = red.split('=');
    let res = {
        left: splt[0].split('+'), 
        right: splt[1].split('+')
    };
    return(eqCreator(res));
}

function parser(argv, callback) {
    let regEq = /([\d\.\d]*X*\^*2*[+\- ]*){3} *= *([\d.\d]*X*\^*\d*[+\- ]*|0)*/g;
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
    } else if (argv.length === 3  && argv[2].match(regEq) && argv[2].match(regEq)[0] === argv[2]) {
        callback(reducer(argv[2]));
    } else {
        console.log('an error occured, type -h for commands and regular uses');
        process.exit;
    }
}

module.exports = {parser};