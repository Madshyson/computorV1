function sqrt(nb) {
    let res = nb;
    while (res > 0) {
        if (res * res === nb) {
            return res;
        } else {
            res--;
        }
    }
    return 0;
}

function resolver(eq) {
    if (eq.resultType < 0) {
        console.log("Discriminant is negative, the equation admits 2 complex solution :");
        console.log("x1 = i * " + ((-1 * eq.b) + sqrt(eq.delta)) / (2 * eq.a));
        console.log("x2 = i * " + ((-1 * eq.b) - sqrt(eq.delta)) / (2 * eq.a));
    } else if (eq.resultType === 0) {
        console.log("Discriminant is null, the eqution admits 1 real solution :");
        console.log("x = " + ((-1 * eq.b) / (2 * eq.a)));
    } else if (eq.resultType > 0) {
        console.log("Discriminant is positive, the equation admits 2 real solution :");
        console.log("x1 = " + ((-1 * eq.b) + sqrt(eq.delta)) / (2 * eq.a));
        console.log("x2 = " + ((-1 * eq.b) - sqrt(eq.delta)) / (2 * eq.a));
    }
}

module.exports = {resolver}