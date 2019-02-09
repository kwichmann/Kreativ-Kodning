function setup() {
  createCanvas(400, 400);
}

function draw() {
  strokeWeight(5);
  stroke(0, 0, 255, 50);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
