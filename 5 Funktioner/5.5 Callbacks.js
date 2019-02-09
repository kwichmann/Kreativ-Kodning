let y = [50, 170, 120, 355, 175];

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(220);
  
  y.forEach(tegnCirkel);
}

function tegnCirkel(y_vaerdi) {
  ellipse(200, y_vaerdi, 40);
}
