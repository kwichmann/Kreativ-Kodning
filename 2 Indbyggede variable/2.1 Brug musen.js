function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, mouseX / 3, mouseY);
  ellipse(mouseY, mouseX, 50);
}
