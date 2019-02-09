let x = 100;
const y = 180;
let hastighed = 1;
const stoerrelse = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(x, y, stoerrelse, stoerrelse);
  x = x + hastighed;
  if (x === width - stoerrelse || x === 0) {
    hastighed = - hastighed;
  }
}
