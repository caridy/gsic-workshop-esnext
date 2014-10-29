/* jshint esnext: true */
function extend(receiver, ...providers) {
    providers.forEach(
        function (p) {
        Object.keys(p).forEach(function (key) {
            receiver[key] = p[key];
        });
    });
    return receiver;
}

var a = {
    foo: 1
};
var b = {
    bar: 2,
    baz: 3
};
var c = extend({}, a, b);
console.log(c);
