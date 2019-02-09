let vinkel = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  translate(200, 200);
  scale(1.5, 0.75);
  rotate(vinkel);
  rect(0, 0, 100, 100);
  vinkel += 1;
}
