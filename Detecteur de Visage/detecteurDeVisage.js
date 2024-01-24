///////////////////////////////////////
// Variables
//////////////////////////////////////

let video;
let poseNet;
let detecting = true;
let borderColor = 'gray';
let noDetectionTimer;
let detectionMessage = "Vous avez été détecté !";
let scanMessage;

///////////////////////////////////////
// Fonctions
//////////////////////////////////////

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', detectPerson);

    noDetectionTimer = setTimeout(changePage, 15000);

    let title = createElement('h1', 'Detection du visage C.O.P.C Website');
    title.style('color', 'white');
    title.style('text-align', 'center');

    scanMessage = createP('Passons au scan suivant:');
    scanMessage.style('color', 'white');
    scanMessage.style('font-size', '24px');
    scanMessage.position(width / 2 - scanMessage.width / 2, height - 60);
    scanMessage.hide();
}


function draw() {
    background(220);
    image(video, 0, 0, width, height);

    stroke(borderColor);
    strokeWeight(3);
    noFill();
    ellipse(width / 2, height / 2, 200, 200);

    if (!detecting) {
        fill('green');
        textSize(30);
        textAlign(CENTER);
        text(detectionMessage, width / 2, height - 80);
        scanMessage.show();
    } else {
        scanMessage.hide();
    }
}


function modelReady() {
    console.log('PoseNet model loaded');
}


function detectPerson(poses) {
    if (poses.length > 0) {
        borderColor = 'green';
        detecting = false;
        clearTimeout(noDetectionTimer);
        setTimeout(changePage, 5000);
    } else {
        borderColor = 'gray';
        detecting = true;
        clearTimeout(noDetectionTimer);
        noDetectionTimer = setTimeout(changePage, 15000);
    }
}


function changePage() {
    window.location.href = "../Analyse de couleur/step2.html";
}