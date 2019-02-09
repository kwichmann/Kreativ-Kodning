let kat;

function preload() {
  kat = loadImage('kat.jpg');
}

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  image(kat, 0, 0);
}
