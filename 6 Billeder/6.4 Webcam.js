let webcam;

function preload() {
  webcam = createCapture(VIDEO);
}

function setup() {
  createCanvas(400, 400);
  webcam.hide();
}
  
function draw() {
  background(220);
  image(webcam, 0, 0, width, height);
}
