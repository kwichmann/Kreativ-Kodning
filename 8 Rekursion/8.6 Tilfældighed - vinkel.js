function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height);
  gren(150, 32);
    
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
  gren(l * 0.55, vinkel + random(-20, 20));
  pop();
  
  rotate(-vinkel);
  gren(l * 0.65, vinkel + random(-20, 10)); 
}
