 
 function myJsFunction(){
    var radius = document.getElementById('input1').value;
    var preArea = Math.pow(radius, 2);
    var area = preArea * Math.PI;

    document.getElementById("result").innerHTML = "r = " + radius + " area = " + area;

}