/* jshint esnext: true */
function sumar(a, b, c = 1, d = 4) {
    return a + b + c + d;
}

var values = [1,2,3];
var result = sumar(...values);
console.log(result);
