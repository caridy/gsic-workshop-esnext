/* jshint esnext:true */

var a = {
    foo(a, b) {
        return a + b;
    }
};

console.log(a.foo(7, 8));

function b () {
    return 1;
}

var z = {b, a};

console.log(z.b());
