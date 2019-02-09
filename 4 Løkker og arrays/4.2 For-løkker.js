function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  
  for (let i = 0; i < 5; i++) {
    ellipse(40 + i * 80, 200, 40);
  }
}
