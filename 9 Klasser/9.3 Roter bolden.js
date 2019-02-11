let bold;
let stor;
let x, y;
let dx, dy;
let v;
let dv;

function preload() {
	bold = loadImage("fodbold.png");
}

function setup() {
  createCanvas(400, 400);
  stor = random(30, 80);
  x = random(stor / 2, width - stor / 2);
  y = random(stor / 2, height - stor / 2);
  dx = random(-5, 5);
  dy = random(-5, 5);
  
  angleMode(DEGREES);
  v = random(360);
  dv = random(-10, 10);
  
  imageMode(CENTER);
}

function draw() {
  background(220);
  tegn();
  opdater();
}

function tegn() {
  translate(x, y);
  rotate(v);
	image(bold, 0, 0, stor, stor);
}

function opdater() {
	x = x + dx;
  if (x < stor / 2 || x > width - stor / 2) {
  	dx = -dx;
  }
  
  y = y + dy;
  if (y < stor / 2 || y > height - stor / 2) {
  	dy = -dy;
  }
  
  v = v + dv;
}
