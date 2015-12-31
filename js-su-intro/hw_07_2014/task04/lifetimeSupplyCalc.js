function calcSupply() {
    var years = document.getElementById('years').value;
    var maxAge = document.getElementById('maxAge').value;
    var favFood = document.getElementById('favFood').value;
    var perDay = document.getElementById('perDay').value;
    var yearsLeft = maxAge - years;
    var amount = yearsLeft*365*perDay;

    document.getElementById('result').innerHTML = amount + " kg of" + favFood + "  would be enough until I am " + maxAge + " years old.";


} //end of function
