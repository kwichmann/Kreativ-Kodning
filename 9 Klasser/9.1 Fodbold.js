let bold;
let x, y

function preload() {
	bold = loadImage("fodbold.png");
}

function setup() {
  createCanvas(400, 400);
  stor = random(30, 80);
  x = random(width - stor);
  y = random(height - stor);
}

function draw() {
  background(220);
  tegn();
}

function tegn() {
	image(bold, x, y, stor, stor);
}
