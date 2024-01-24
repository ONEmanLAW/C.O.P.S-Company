///////////////////////
// Variables
///////////////////////

const ultrasonicIntervalMin = 5000;
const ultrasonicIntervalMax = 15000;
let isHuman = false;

///////////////////////
// Fonctions 
///////////////////////

function setup() {
    createCanvas(400, 400);
    setInterval(playUltrasonic, random(ultrasonicIntervalMin, ultrasonicIntervalMax));
}


function draw() {
    background(255);
}


function playUltrasonic() {
    alert("Cliquez sur le bouton dans les 5 secondes pour prouver que vous êtes humain.");
    setTimeout(() => {
        activateButtons();
    }, 5000);
}


function activateButtons() {
    isHuman = false;
    document.getElementById('humanButton').style.display = 'block';
    document.getElementById('nextTestButton').style.display = 'block';
}


function checkHuman() {
    isHuman = true;
    hideButtons();
    window.location.href = "test_reussi.html";
}


function nextTest() {
    hideButtons();
    window.location.href = "test_suivant.html";
}


function hideButtons() {
    document.getElementById('humanButton').style.display = 'none';
    document.getElementById('nextTestButton').style.display = 'none';
}