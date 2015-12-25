var zero1 = 0;
var zero2 = 0;
var zero3 = 0;
var zero4 = 0;
var zero5 = 0;
var zero6 = 0;
var zero7 = 0;
var zero8 = 0;
var eks1 = 0;
var eks2 = 0;
var eks3 = 0;
var eks4 = 0;
var eks5 = 0;
var eks6 = 0;
var eks7 = 0;
var eks8 = 0;

function zero11() {
    zero1++;
    zero4++;
    zero7++;
    document.getElementById('zx11').innerHTML = "0";
    if (zero1 === 3 || zero4 === 3 || zero7=== 3) {
        alert('player 0 has won');
    }
}

function eks11() {
    eks1++;
    eks4++;
    eks7++;
    document.getElementById('zx11').innerHTML = "x";
    if (eks1 === 3 || eks4 === 3 || eks7 === 3) {
        alert('player x has won');
    }
}

function zero12() {
    zero1++;
    zero5++;
    document.getElementById('zx12').innerHTML = "0";
    if (zero1 === 3 || zero5 === 3) {
        alert('player 0 has won');
    }
}

function eks12() {
    eks1++;
    eks5++;
    document.getElementById('zx12').innerHTML = "x";
    if (eks1 === 3 || eks5 === 3) {
        alert('player x has won');
    }
}

function zero13() {
    zero1++;
    zero6++;
    zero8++;


    document.getElementById('zx13').innerHTML = "0";
    if (zero1 === 3 || zero6 === 3 || zero8 === 3) {
        alert('player 0 has won');
    }
}

function eks13() {
    eks1++;
    eks6++;
    eks8++;
    document.getElementById('zx13').innerHTML = "x";
    if (eks1 === 3 || eks6 === 3 || eks8 === 3) {
        alert('player x has won');
    }
}

//second row
function zero21() {
    zero2++;
    zero4++;
    document.getElementById('zx21').innerHTML = "0";
    if (zero2 === 3 || zero4 === 3) {
        alert('player 0 has won');
    }
}

function eks21() {
    eks2++;
    eks4++;
    document.getElementById('zx21').innerHTML = "x";
    if (eks2 === 3 || eks4 === 3 ) {
        alert('player x has won');
    }
}

function zero22() {
    zero2++;
    zero5++;
    zero7++;
    zero8++;
    
    
    document.getElementById('zx22').innerHTML = "0";
    if (zero2 === 3 || zero5 === 3 || zero7 === 3 || zero8 === 3) {
        alert('player 0 has won');
    }
}

function eks22() {
    eks2++;
    eks5++;
    eks7++;
    eks8++;

    document.getElementById('zx22').innerHTML = "x";
    if (eks2 === 3 || eks5 === 3 || eks7 === 3 || eks8 === 3) {
        alert('player x has won');
    }
}

function zero23() {
    zero2++;
    zero6++;

    document.getElementById('zx23').innerHTML = "0";
    if (zero2 === 3 || zero6 == 3) {
        alert('player 0 has won');
    }
}

function eks23() {
    eks2++;
    eks6++;

    document.getElementById('zx23').innerHTML = "x";
    if (eks2 === 3 || eks6 == 3) {
        alert('player x has won');
    }
}

//third row
function zero31() {
    zero3++;
    zero4++;
    zero8++;

    document.getElementById('zx31').innerHTML = "0";
    if (zero3 === 3 || zero4 === 3 || zero8 === 3) {
        alert('player 0 has won');
    }
}

function eks31() {
    eks3++;
    eks4++;
    eks8++;

    document.getElementById('zx31').innerHTML = "x";
    if (eks3 === 3 || eks4 === 3 || eks8 === 3) {
        alert('player x has won');
    }
}

function zero32() {
    zero3++;
    zero5++;

    document.getElementById('zx32').innerHTML = "0";
    if (zero3 === 3 || zero5 === 3) {
        alert('player 0 has won');
    }
}

function eks32() {
    eks3++;
    eks5++;

    document.getElementById('zx32').innerHTML = "x";
    if (eks3 === 3 || eks5 === 3) {
        alert('player x has won');
    }
}

function zero33() {
    zero3++;
    zero6++;
    zero7++;

    document.getElementById('zx33').innerHTML = "0";
    if (zero3 === 3 || zero6 === 3 || zero7 === 3) {
        alert('player 0 has won');
    }
}

function eks33() {
    eks3++;
    eks6++;
    eks7++;

    document.getElementById('zx33').innerHTML = "x";
    if (eks3 === 3 || eks6 === 3 || eks7 === 3) {
        alert('player x has won');
    }
}