var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var line4 = document.getElementById('line4');
var line5 = document.getElementById('line5');
var line6 = document.getElementById('line6');
var line7 = document.getElementById('line7');
var input = document.getElementById("inputBox");

var enemy = [1,1];
var you = [1,1];

function show(id) {
    var object = document.getElementById(id);
    object.style.display = "block";
}

function hide(id) {
    var object = document.getElementById(id);
    object.style.display = 'none';
}

function getRandomInt(min, max) { 
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function newInfo(info, text) {
    line7.innerHTML = line6.innerHTML;
    line6.innerHTML = line5.innerHTML;
    line5.innerHTML = line4.innerHTML;
    line4.innerHTML = line3.innerHTML;
    line3.innerHTML = line2.innerHTML;
    line2.innerHTML = line1.innerHTML;
    if (text == true) {line1.innerHTML = "<p class='DisplayText'>"+info+"</p>"; return}
    line1.innerHTML = info;
}

function hi() {
    newInfo("You Clicked IT!!", true);
}


newInfo("do you wish to go first or last?", true);
newInfo("<p class='button' onclick='hi()'>[Test]</p>");