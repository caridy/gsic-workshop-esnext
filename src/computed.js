/* jshint esnext:true */

var name = 'propertyABC';

var a = {
    other: 2,
    [name]: 1
};

console.log(a[name]);
