function setup() {
  createCanvas(400, 400);
}

function draw() {
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
