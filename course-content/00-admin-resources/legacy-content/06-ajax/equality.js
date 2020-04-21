


var sample = function () {
    var a = b = 3;

    b = 3;
    var a = b;
}

sample();

console.log("Is a defined?", typeof a !== "undefined");
console.log("Is b defined?", typeof b !== "undefined");