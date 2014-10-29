/* jshint esnext: true */
function foo(x, {y, z}) {
    return x + y + z;
}

var result = foo(1, {y: 2, z: 3});
console.log(result);

var z = {
    a: 1,
    b: 2,
    c: 3
};
var arr = [1, 2, 3, 4];

var {a, b} = z;
var [x, ,y] = arr;

console.log(x, y, a, b);
