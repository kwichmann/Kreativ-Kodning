let y = [50, 170, 120, 355, 175];

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  
  y.forEach(function(y_vaerdi, i) {
    ellipse(40 + i * 80, y_vaerdi, 40);
  });
}
