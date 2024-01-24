////////////////////////////////////////
// Variables
////////////////////////////////////////

let video;
let alienCount = 0;
let threshold = 100; // Niveau de rouge
let analysisDuration = 5000;
let displayDuration = 8000;
let detectionThreshold = 299999; // Détection d'aliens

////////////////////////////////////////
// Fonctions
////////////////////////////////////////

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
    video.play();

    setTimeout(() => {
        analyzeVideo();
    }, analysisDuration);
}


function analyzeVideo() {
    background(0);
    image(video, 0, 0, width, height);

    loadPixels();

    for (let i = 0; i < pixels.length; i += 4) {
        let r = pixels[i];
        let g = pixels[i + 1];
        let b = pixels[i + 2];

        // Niveau de rouge qui dépasse la limite
        if (r > threshold && r > g && r > b) {
            alienCount++; // Alien détecté
        }
    }

    updatePixels();

    textSize(24);
    fill(255);
    text(`Nombre de pixels "Alien": ${alienCount}`, 20, 30);

    let message = (alienCount > detectionThreshold) ? "Un Alien a ete detecter !" : "C'est bon passons au test suivant.";
    fill(alienCount > detectionThreshold ? 'red' : 'green');
    text(message, 20, 60);
    if (alienCount > detectionThreshold) {
        alert("Alerte : Alien detecter !");
    }

    let resultDiv = createDiv(message);
    resultDiv.id('result');
    resultDiv.style('color', alienCount > detectionThreshold ? 'red' : 'green');
    resultDiv.position(30, 400);

    setTimeout(() => {
        window.location.href = '../Test de Réaction/step4.html';
    }, displayDuration);
}