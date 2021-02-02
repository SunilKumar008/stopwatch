var s = 0;
var mint = 0;
var h = 0;
var m = 0;
var disphour = document.getElementById("hor");
var dismnt = document.getElementById("mnt");
var dissec = document.getElementById("sec");
var mili = document.getElementById("milisec");


function timer() {
    m++;
    mili.innerHTML = m;
    if (m === 100) {
        m = 0;
        s++;
        dissec.innerHTML = s;
    }
    else if (s == 60) {
        s = 0;
        mint++;
        dismnt.innerHTML = mint;
    }
    else if (mint == 60) {
        mint = 0;
        h++;
        disphour.innerHTML = h;
    }
}

function strt() {
    tim = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stp() {

    clearInterval(tim);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
function clr() {
    s = "00";
    mint = "00";
    h = "00";
    m = "00";
    disphour.innerHTML = h;
    dismnt.innerHTML = mint;
    dissec.innerHTML = s;
    mili.innerHTML = m;
    clearInterval(tim);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = false;
}