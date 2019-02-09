function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  
  let x = 40;
  while (x < width) {
    ellipse(x, 200, 40);
    x += 20;
  }
}
