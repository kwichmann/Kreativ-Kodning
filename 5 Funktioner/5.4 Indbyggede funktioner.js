function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(5);
}

function draw() {

}

function mouseClicked() {
  point(mouseX, mouseY);
}

function mouseDragged() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}