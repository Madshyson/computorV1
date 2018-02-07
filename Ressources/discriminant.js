function discriminant(eq, callback) {
    //D = (b*b) - 4*a*c
    eq.delta = (ed.b * ed.b) - (4 * eq.a * eq.c);
    if (eq.delta < 0) {
        eq.resultType = -1;
    } else if (eq.delta > 0) {
        eq.resultType = 1;
    } else if (eq.delta === 0) {
        eq.resultType = 0
    }
    callback(eq);
}

module.exports = {discriminant};