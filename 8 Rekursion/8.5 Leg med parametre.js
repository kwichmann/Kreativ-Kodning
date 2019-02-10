function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height);
  gren(50, 30);
    
  noLoop();
}

function gren(l, vinkel) {
  if (l < 3) {
    return;
  }
	line(0, 0, 0, -l);
  translate(0, -l);
  
  push();
  rotate(vinkel);
  gren(l * 0.65, vinkel);
  pop();
  
  rotate(-vinkel);
  gren(l * 0.85, vinkel); 
}
