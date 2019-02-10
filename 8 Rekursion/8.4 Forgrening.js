function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height);
  gren(100, 30);
}

function gren(l, vinkel) {
  if (l < 3) {
    return;
  }
	line(0, 0, 0, -l);
  translate(0, -l);
  
  push();
  rotate(vinkel);
  gren(l * 0.5, vinkel);
  pop();
  
  rotate(-vinkel);
  gren(l * 0.5, vinkel);
}
