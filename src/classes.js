/* jshint esnext:true */

class Spain {
    constructor (a) {
        this.foo = 1;
        this.a = a;
    }
    jamon() {}
    something() {
        return 4;
    }
    static counter() {
        var c = 0;
        c++;
    }
}

class Galicia extends Spain {
    constructor (a) {
        super(a);
        this.b = 5;
    }
    pulpo() {
        return super.something() + 1;
    }
}


var spainInstance = new Spain(2);

console.log(spainInstance.foo, spainInstance.a);

var galInstance = new Galicia(3);

console.log(galInstance.foo, galInstance.a, galInstance.b);
