function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height);
  gren(100);
}

function gren(l) {
  if (l < 3) {
    return;
  }
	line(0, 0, 0, -l);
  translate(0, -l);
  rotate(15);
  gren(l * 0.5);
}
