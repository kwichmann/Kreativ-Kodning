function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height);
  gren(100);
}

function gren(l) {
	line(0, 0, 0, -l);
  translate(0, -l);
}
