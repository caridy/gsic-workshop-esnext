/* jshint esnext:true */

var agregador = {
    sum: 0,
    add: function (arr) {
        arr.forEach(value => {
            this.sum += value;
        });
    }
};

agregador.add([1, 2]);
agregador.add([3, 4]);

console.log(agregador.sum);


var r = [1, 2, 3].map(n => n * 2);
console.log(r);
