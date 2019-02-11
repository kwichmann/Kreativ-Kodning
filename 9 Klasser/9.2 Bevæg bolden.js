let bold;
let stor;
let x, y;
let dx, dy;

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
  opdater();
}

function tegn() {
	image(bold, x, y, stor, stor);
}

function opdater() {
	x = x + dx;
  if (x < 0 || x > width - stor) {
  	dx = -dx;
  }
  
  y = y + dy;
  if (y < 0 || y > height - stor) {
  	dy = -dy;
  }
}
