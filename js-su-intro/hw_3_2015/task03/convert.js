function myJsFunction() {
    var userNum = document.getElementById('input1').value;

    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    var num = getBaseLog(16, userNum);
    var digit = Math.floor(num);

    var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "10"];
    var result = [];
    var resDigit = [];
    var delta = userNum;

    for (var i = digit; i >= 0; i--) {
        var deg = Math.pow(16, i);
        result[i] = Math.floor(delta / deg);
        delta = delta - result[i] * deg;
        resDigit[i] = hex[result[i]];
    }
    var text = resDigit[digit];
    for (var j = digit-1; j >= 0; j--) {
        text += resDigit[j];
        //alert(text);
    }

    document.getElementById("hex").innerHTML = text;

} //end of function
