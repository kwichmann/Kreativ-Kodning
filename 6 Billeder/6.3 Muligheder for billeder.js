let kat;

function preload() {
  kat = loadImage('kat.jpg');
}

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  imageMode(CENTER);
  tint(0, 255, 0);
  image(kat, mouseX, mouseY, 50, 50);
}
