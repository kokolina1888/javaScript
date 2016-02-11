function deepCopy(ob) {
    if (Object.prototype.toString.call(ob) === '[object Array]') {
        var out = [], i, len = ob.length;
        for ( i = 0 ; i < len; i++ ) {
            out[i] = arguments.callee(ob[i]);
        }
        return out;
    }
    if (typeof ob === 'object') {
        var secondOut = {}, j;
        for ( j in ob ) {
            secondOut[j] = arguments.callee(ob[j]);
        }
        return secondOut;
    }
    
    var thirdOut;
    thirdOut = ob;
    return thirdOut;
}
var arr = [];
arr = [1, 2, 3, [1, 2, 3]];
console.log(deepCopy(arr));

var arr1 = {a: 1, b:2, c:'reallity'};
console.log(deepCopy(arr1));

var m=101;
console.log(deepCopy(m));

