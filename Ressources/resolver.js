function sqrt(n, g) {
    if (!g) {
        g = n / 2.0;
    }
    var d = n / g;
    var ng = (d + g) / 2.0;
    if (g == ng) {          
        return g;
    }
    return sqrt(n, ng);
}

function resolver(eq) {
    if (eq.resultType < 0) {
        console.log("Discriminant is negative, this equation admits 2 complex solution :");
        console.log("x1 = (" + (-1 * eq.b) + ' + ' + sqrt(-1 * eq.delta) + 'i) / ' + (2 * eq.a));
        console.log("x2 = (" + (-1 * eq.b) + ' - ' + sqrt(-1 * eq.delta) + 'i) / ' + (2 * eq.a));
    } else if (eq.resultType === 0) {
        console.log("Discriminant is null, this equation admits 1 real solution :");
        console.log("x = " + ((-1 * eq.b) / (2 * eq.a)));
    } else if (eq.resultType > 0) {
        console.log("Discriminant is positive, this equation admits 2 real solution :");
        console.log("x1 = " + ((-1 * eq.b) + sqrt(eq.delta)) / (2 * eq.a));
        console.log("x2 = " + ((-1 * eq.b) - sqrt(eq.delta)) / (2 * eq.a));
    }
}

module.exports = {resolver}