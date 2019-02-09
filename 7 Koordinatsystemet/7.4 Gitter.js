let vinkel = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(200, 200);
  rotate(vinkel);
  scale(1.5, 0.75);
  
  strokeWeight(2);
  stroke(0);
  rect(0, 0, 100, 100);
  
  gitter();
  vinkel += 1;
}

function gitter() {
  strokeWeight(1);
  stroke(0, 100);
  
  const afstand = 50;
  
  let x = - width;
  while(x < 2 * width) {
  	line(x, -height, x, 2 * height);
    x += afstand;
  }
  
  let y = - height;
  while(y < 2 * height) {
  	line(-width, y, 2 * width, y);
    y += afstand;
  }
  
  strokeWeight(10);
  stroke(255, 0, 0);
	point(0, 0);
}
