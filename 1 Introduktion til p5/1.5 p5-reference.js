function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(255, 0, 200);

  strokeWeight(10);
  stroke(100, 20, 200);
  point(200, 200);

  strokeWeight(5);
  stroke(0, 255, 0);
  line(100, 100, 200, 300);

  noStroke();
  fill(41);
  rect(300, 50, 80, 60);

  stroke(30, 40, 180);
  strokeWeight(2);
  ellipse(300, 300, 100, 150);

  triangle(30, 75, 58, 20, 86, 275);
}
