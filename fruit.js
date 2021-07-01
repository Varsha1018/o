img="";

function preload(){
    img=loadImage("fruit.webp");
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML="Status - Detecting Object";
}

function draw(){
    image(img, 0, 0, 640, 420);
}

status="";

function modelloaded(){
    console.log("Model Loaded!!");
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
    console.error(error);
    }
    console.log(results);
}

function back(){
    window.location="index.html";
}