/* jshint esnext: true */
function sum(a, b, c, d) {
    return a + b + c + d;
}

var values = [1,2,3,4];
var result = sum(...values);
console.log(result);
