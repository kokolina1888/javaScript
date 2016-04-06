// //compose(addOne, square)(5)
// //26 // addOne(square(5)) = 5 * 5 + 1 = 26
// var compose = function () {
//   var fns = arguments;

//   return function (result) {
//     for (var i = fns.length - 1; i > -1; i--) {
//       result = fns[i].call(this, result);
//     }
//     return result;
//   };
// };
function add(x,y) {
    return x+y;
}
function addOne(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}

var compose = function(f, g) {
    return function() {
        return f.call(this, g.apply(this, arguments));
    };
};

console.log(compose(addOne, Math.cos)(-1)); 
var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(compositeFunction(0.5));
console.log(compositeFunction(1));
console.log(compositeFunction(-1));
