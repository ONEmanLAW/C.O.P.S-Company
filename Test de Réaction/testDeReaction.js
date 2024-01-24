//////////////////////
// Variables
//////////////////////

const startButton = document.getElementById("startButton");
const attemptsSpan = document.getElementById("attempts");
let attemptsLeft = 3;
let startTime, endTime;

//////////////////////
// Fonctions
//////////////////////

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTest() {
    if (attemptsLeft <= 0) {
        alert("Vous n'avez plus d'essais restants.");
        return;
    }

    if (startTime !== undefined) {
        return;
    }

    startTime = null;
    endTime = null;
    startButton.disabled = true;
    startButton.innerText = "Préparez-vous...";

    setTimeout(() => {
        startButton.innerText = "CLIQUEZ MAINTENANT";
        startTime = new Date().getTime();

        startButton.addEventListener("click", endTest);
        startButton.disabled = false;
    }, getRandomDelay(2000, 8000));
}

function endTest() {
    endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    alert("Votre temps de réaction est de " + reactionTime + " millisecondes.");

    // Condition pour déterminer si l'utilisateur est considéré comme un alien
    if (reactionTime > 350) {
        alert("Alerte Alien : Votre temps de réaction est anormalement élevé !");
    }

    startButton.removeEventListener("click", endTest);
    startButton.disabled = true;
    startTime = undefined;
    attemptsLeft--;
    attemptsSpan.innerText = attemptsLeft;

    setTimeout(() => {
        startButton.innerText = "Commencer le test";
        startButton.disabled = false;
    }, getRandomDelay(2000, 5000));
}

function changePage() {
    window.location.href = "../The End/end.html";
}